function Authorization(req, res, next) {
  const userId = req.userId;
  if (userId) {
    next();
  } else {
    res.status(401).json({ message: "No autorizado" });
  }
}

module.exports = Authorization;
