const publicRoutes = ["/auth/login", "/auth/register", "/auth/verify"];
function verifyToken(req, res, next) {
  const authorization = req.headers.authorization;
  if (!authorization) {
    return res.status(401).json({
      message: "No Authorization Header",
    });
  }
  try {
    const token = authorization.split("Bearer ")[1];
    if (!token) {
      return res.status(401).json({
        message: "Invalid Token Format",
      });
    }
    const decode = jwt.verify(token, process.env.SECRET_KEY);
    req.userId = decode;
    next();
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      return res.status(401).json({
        message: "Session Expired",
        error: error.message,
      });
    }
    if (error instanceof jwt.JsonWebTokenError) {
      return res.status(401).json({
        message: "Invalid Token",
        error: error.message,
      });
    }
    res.status(500).json({
      message: "Internal server Error",
      error: error.message,
      stack: error.stack,
    });
  }
}

function checkAuthentication(req, res, next) {
  // Si la ruta es pública, continúa sin verificar el token
  if (publicRoutes.includes(req.path)) return next();
  // Si la ruta es privada, verifica el token
  verifyToken(req, res, next);
}

module.exports = checkAuthentication;
