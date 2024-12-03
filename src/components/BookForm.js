import React, { useContext, useState } from "react";
import { BookContext } from "../context/BookContext";
import { useNavigate } from "react-router-dom";

const BookForm = () => {
    const { addBook, updateBook, selectedBook } = useContext(BookContext);
    const [book, setBook] = useState(
        selectedBook || { id: "", name: "", author: "", price: "" }
    );
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (selectedBook) {
            updateBook(book.id, book);
        } else {
            addBook(book);
        }
        navigate("/");
    };

    return (
        <div className="container mt-4">
            <h2>{selectedBook ? "Edit Book" : "Add Book"}</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label>ID</label>
                    <input
                        type="text"
                        className="form-control"
                        value={book.id}
                        onChange={(e) => setBook({ ...book, id: e.target.value })}
                        disabled={!!selectedBook}
                    />
                </div>
                <div className="mb-3">
                    <label>Name</label>
                    <input
                        type="text"
                        className="form-control"
                        value={book.name}
                        onChange={(e) => setBook({ ...book, name: e.target.value })}
                    />
                </div>
                <div className="mb-3">
                    <label>Author</label>
                    <input
                        type="text"
                        className="form-control"
                        value={book.author}
                        onChange={(e) => setBook({ ...book, author: e.target.value })}
                    />
                </div>
                <div className="mb-3">
                    <label>Price</label>
                    <input
                        type="number"
                        className="form-control"
                        value={book.price}
                        onChange={(e) => setBook({ ...book, price: e.target.value })}
                    />
                </div>
                <button type="submit" className="btn btn-success">
                    Save
                </button>
            </form>
        </div>
    );
};

export default BookForm;
