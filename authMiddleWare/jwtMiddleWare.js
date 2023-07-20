const jwt = require('jsonwebtoken');
const key = require("../config/session.config");

const secretKey = key.secretKey;

function authMiddleware(req, res, next) {
  // Get the token from the request headers
  const token = req.headers.authorization;  // the request should have the key/token in the header of the request 

  if (!token) {
    return res.json({ message: 'No token provided.' });
  }

  // Verify and decode the token
  try {
    const decoded = jwt.verify(token, secretKey);
    req.userId = decoded.userId; // Attach the user information to the request object
    next(); // Proceed to the next middleware or route handler
  } catch (error) {
    return res.json({ message: 'Invalid token.' });
  }
}

module.exports = authMiddleware;