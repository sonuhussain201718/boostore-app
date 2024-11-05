// controllers/bookController.js
const db = require("../config/db");

// Get all books
const getBooks = async (req, res) => {
  try {
    const result = await db.query(
      "SELECT * FROM bookstore.books order by id desc"
    );
    res.json(result.rows);
  } catch (err) {
    console.error("Error fetching books", err);
    res.status(500).json({ error: "Failed to fetch books" });
  }
};

// Get a single book by ID
const getBookById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await db.query(
      "SELECT * FROM bookstore.books WHERE id = $1",
      [id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Book not found" });
    }
    res.json(result.rows[0]);
  } catch (err) {
    console.error("Error fetching book", err);
    res.status(500).json({ error: "Failed to fetch book" });
  }
};

// Create a new book
const createBook = async (req, res) => {
  const { title, author, published_date, isbn, pages, language, publisher } =
    req.body;
  try {
    const result = await db.query(
      "INSERT INTO bookstore.books (title, author, published_date, isbn, pages, language, publisher) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
      [title, author, published_date, isbn, pages, language, publisher]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error("Error creating book", err);
    res.status(500).json({ error: "Failed to create book" });
  }
};

// Update an existing book
const updateBook = async (req, res) => {
  const { id } = req.params;
  const { title, author, published_date, isbn, pages, language, publisher } = req.body;
  try {
    const result = await db.query(
      "UPDATE bookstore.books SET title=$1, author=$2, published_date=$3, isbn=$4, pages=$5, language=$6, publisher=$7 WHERE id = $8 RETURNING *",
      [title, author, published_date, isbn, pages, language, publisher, id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Book not found" });
    }
    res.json(result.rows[0]);
  } catch (err) {
    console.error("Error updating book", err);
    res.status(500).json({ error: "Failed to update book" });
  }
};

// controllers/bookController.js

const deleteBook = async (req, res) => {
  const { id } = req.params;

  try {
    // Delete the book by its id
    const result = await db.query(
      "DELETE FROM bookstore.books WHERE id = $1 RETURNING *",
      [id]
    );

    // Check if the book was found and deleted
    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Book not found" });
    }

    // Respond with a success message and the deleted book data (optional)
    res.status(200).json({
      message: "Book deleted successfully",
      deletedBook: result.rows[0],  // Optionally return the deleted book data
    });
  } catch (err) {
    console.error("Error deleting book:", err);
    res.status(500).json({ error: "Failed to delete book" });
  }
};


module.exports = {
  getBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
};
