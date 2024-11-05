// routes/bookRoutes.js
const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');
const { verifyToken } = require('../middleware/authMiddleware');

// Get all books
router.get('/books', verifyToken, bookController.getBooks);

// Get a book by ID
router.get('/books/:id', verifyToken, bookController.getBookById);

// Create a new book
router.post('/books', verifyToken, bookController.createBook);

// Update a book
router.put('/books/:id', verifyToken, bookController.updateBook);

// Delete a book
router.delete('/books/:id', verifyToken, bookController.deleteBook);

module.exports = router;
