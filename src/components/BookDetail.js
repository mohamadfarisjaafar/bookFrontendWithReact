import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";
import { useNavigate } from "react-router-dom";

const BookDetail = () => {
    const { selectedBook } = useContext(BookContext);
    const navigate = useNavigate();

    if (!selectedBook) return <p>Book not found!</p>;

    return (
        <div className="container mt-4">
            <h2>Book Details</h2>
            <p><strong>ID:</strong> {selectedBook.id}</p>
            <p><strong>Name:</strong> {selectedBook.name}</p>
            <p><strong>Author:</strong> {selectedBook.author}</p>
            <p><strong>Price:</strong> ${selectedBook.price}</p>
            <button className="btn btn-primary" onClick={() => navigate("/")}>
                Back to List
            </button>
        </div>
    );
};

export default BookDetail;
