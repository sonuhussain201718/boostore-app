// app.js
const express = require('express');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const bookRoutes = require('./routes/bookRoutes'); 
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json'); // Import the swagger.json file

// Load environment variables from .env file
dotenv.config();

const app = express();
app.use(express.json()); 

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

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
