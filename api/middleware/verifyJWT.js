const jwt = require('jsonwebtoken');

module.exports = function verifyJWT(req, res, next) {
  const authHeader = req.headers.authorization
  if (authHeader) {
      const token = authHeader.split(' ')[1];

      jwt.verify(token, process.env.AUTH_TOKEN, (err, user) => {
          if (err) {
              return res.status(401).json({ error: "Unauthorized" });
          }

          req.user = user;
          next();
      });
  } else {
    res.status(401).json({ error: "Unauthorized" });
  }
}