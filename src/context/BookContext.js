import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const BookContext = createContext();

const BookProvider = ({ children }) => {
    const [books, setBooks] = useState([]);
    const [selectedBook, setSelectedBook] = useState(null);

    const fetchBooks = async () => {
        const response = await axios.get("http://localhost:3000/api/books");
        setBooks(response.data);
    };

    const addBook = async (book) => {
        const response = await axios.post("http://localhost:3000/api/books", book);
        setBooks([...books, response.data]);
    };

    const updateBook = async (id, updatedBook) => {
        const response = await axios.put(`http://localhost:3000/api/books/${id}`, updatedBook);
        setBooks(books.map((book) => (book.id === id ? response.data : book)));
    };

    const deleteBook = async (id) => {
        await axios.delete(`http://localhost:3000/api/books/${id}`);
        setBooks(books.filter((book) => book.id !== id));
    };

    useEffect(() => {
        fetchBooks();
    }, []);

    return (
        <BookContext.Provider
            value={{
                books,
                selectedBook,
                setSelectedBook,
                addBook,
                updateBook,
                deleteBook,
            }}
        >
            {children}
        </BookContext.Provider>
    );
};

export default BookProvider;
