function Authorization(req, res, next) {
  const userId = req.userId;
  next();
  // if (userId) {
  //   next();
  // } else {
  //   res.status(401).json({ message: "No autorizado" });
  // }
}

module.exports = Authorization;
