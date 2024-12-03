import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";
import { useNavigate } from "react-router-dom";

const BookList = () => {
    const { books, deleteBook, setSelectedBook } = useContext(BookContext);
    const navigate = useNavigate();

    return (
        <div className="container mt-4">
            <h2>Book List</h2>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Author</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book) => (
                        <tr key={book.id}>
                            <td>{book.id}</td>
                            <td>{book.name}</td>
                            <td>{book.author}</td>
                            <td>{book.price}</td>
                            <td>
                                <button
                                    className="btn btn-info me-2"
                                    onClick={() => {
                                        setSelectedBook(book);
                                        navigate(`/books/${book.id}`);
                                    }}
                                >
                                    View
                                </button>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => deleteBook(book.id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button
                className="btn btn-primary"
                onClick={() => navigate("/books/new")}
            >
                Add Book
            </button>
        </div>
    );
};

export default BookList;
