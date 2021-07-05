async function checkHeader(req, res, next) {
  console.log("the req session", req.session.user);
  const header = req.headers['allowed']
  console.log('the header is', header)
  if (header !== "Uvote") {
    res.status(403).end("Forbidden!");
    return;
  }
  next();
}

module.exports = {
  checkHeader,
};
