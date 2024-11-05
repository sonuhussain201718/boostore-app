// app.js
const express = require('express');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const bookRoutes = require('./routes/bookRoutes'); // Assuming you already have book routes

// Load environment variables from .env file
dotenv.config();

const app = express();
app.use(express.json()); // Parse JSON request bodies

// Use the routes
app.use('/api/auth', authRoutes);
app.use('/api', bookRoutes);

// Test route
app.get('/', (req, res) => {
  res.send('Welcome to the Bookstore API!');
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
