// middleware/authMiddleware.js
const jwt = require('jsonwebtoken');

// Secret key for JWT (same as the one used to sign the token)
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret_key';

// Middleware to verify JWT token
const verifyToken = (req, res, next) => {
  // Get token from the Authorization header (Bearer token)
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ error: 'Access denied. No token provided.' });
  }

  try {
    // Verify token using the secret key
    const decoded = jwt.verify(token, JWT_SECRET);

    // Attach the decoded user info to the request object
    req.user = decoded;

    next(); // Proceed to the next middleware or route handler
  } catch (err) {
    console.error('Invalid or expired token:', err);
    res.status(401).json({ error: 'Invalid or expired token' });
  }
};

module.exports = { verifyToken };
