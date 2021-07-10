const express = require("express");
const cors = require("cors");
const path = require("path");
const cookieParser = require("cookie-parser");
const expressSession = require("express-session");

const app = express();
const http = require("http").createServer(app);

const session = expressSession({
  secret: "shawrama is amazing",
  resave: true,
  saveUninitialized: true,
  cookie: { secure: false, sameSite: true },
});
// Express App Config
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session);
// HTTPS only middleware
function requireHTTPS(req, res, next) {
  // The 'x-forwarded-proto' check is for Heroku
  if (
    process.env.NODE_ENV === "production" &&
    !req.secure &&
    req.get("x-forwarded-proto") !== "https"
  ) {
    return res.redirect("https://" + req.get("host") + req.url);
  }
  next();
}
app.use(requireHTTPS);

if (process.env.NODE_ENV === "production") {
  app.all("*", function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "URLs to trust of allow");
    res.header(
      "Access-Control-Allow-Methods",
      "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    );
    res.header("Access-Control-Allow-Headers", "Content-Type");
    if ("OPTIONS" == req.method) {
      res.sendStatus(200);
    } else {
      next();
    }
  });
}

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "public")));
}
const corsOptions = {
  origin: ["http://localhost:4200", "https://uvote-app.herokuapp.com/"],
  credentials: true,
};
app.use(cors(corsOptions));

const pollRoutes = require("./api/poll/poll.routes");
const authRoutes = require("./api/auth/auth.routes");
const userRoutes = require("./api/user/user.routes");
const { connectSockets } = require("./services/socket.service");

// routes
app.use("/api/poll", pollRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
connectSockets(http, session);

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

const logger = require("./services/logger.service");
const port = process.env.PORT || 3030;
http.listen(port, () => {
  logger.info("Server is running on port: " + port);
});

console.log("Server Started");
