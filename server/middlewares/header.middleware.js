async function checkHeader(req, res, next) {
  const header = req.headers['allowed']
  if (header !== "Uvote") {
    res.status(403).end("Forbidden!");
    return;
  }
  next();
}

module.exports = {
  checkHeader,
};
