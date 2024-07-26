/*import Book from "../model/book.model.js";

export const getBook = async(req, res) => {
    try {
        const book = await Book.find();
        res.status(200).json(book);
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json(error);
    }
};*/
import Book from '../model/book.model.js';

// Function to get all books
export const getBook = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    console.log("Error: ", error);
    res.status(500).json(error);
  }
};

// Function to create a new book
export const postBook = async (req, res) => {
  // Extract book details from request body
  const { name, price, category, image, title } = req.body;

  try {
    // Create a new book instance
    const newBook = new Book({
      name,
      price,
      category,
      image,
      title
    });

    // Save the new book to the database
    await newBook.save();

    // Send success response
    res.status(201).json(newBook);
  } catch (error) {
    console.log("Error: ", error);
    res.status(400).json({ message: 'Error creating book', error });
  }
};
