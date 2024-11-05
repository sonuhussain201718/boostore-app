// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Register user route
router.post('/register', authController.registerUser);
// Login route
router.post('/login', authController.loginUser);

module.exports = router;
