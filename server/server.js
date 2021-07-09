const express = require("express");
// const bodyParser = require("body-parser");
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
  if (process.env.NODE_ENV === 'production' && !req.secure && req.get("x-forwarded-proto") !== "https") {
    return res.redirect("https://" + req.get("host") + req.url);
  }
  next();
}
app.use(requireHTTPS);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.resolve(__dirname, "dist")));
} else {
  const corsOptions = {
    origin: ["http://localhost:4200"],
    credentials: true,
  };
  app.use(cors(corsOptions));
}

const pollRoutes = require("./api/poll/poll.routes");
const authRoutes = require("./api/auth/auth.routes");
const userRoutes = require("./api/user/user.routes");
const { connectSockets } = require("./services/socket.service");

// routes
app.use("/api/poll", pollRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
connectSockets(http, session);

// Make every server-side-route to match the index.html
// so when requesting http://localhost:3000/index.html/car/123 it will still respond with
// our SPA (single page app) (the index.html file) and allow react-router to take it from there
app.get("/**", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

const logger = require("./services/logger.service");
const port = process.env.PORT || 3030;
http.listen(port, () => {
  logger.info("Server is running on port: " + port);
});

console.log("Server Started");
