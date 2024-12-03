import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { BookContext } from "../context/BookContext";
import BookList from "./BookList";

const mockBooks = [
    { id: "1", name: "Book One", author: "Author One", price: "10" },
    { id: "2", name: "Book Two", author: "Author Two", price: "15" },
];

test("renders book list and buttons", () => {
    const deleteBook = jest.fn();
    const setSelectedBook = jest.fn();

    render(
        <BookContext.Provider
            value={{ books: mockBooks, deleteBook, setSelectedBook }}
        >
            <BrowserRouter>
                <BookList />
            </BrowserRouter>
        </BookContext.Provider>
    );

    // Check if books are rendered
    expect(screen.getByText("Book One")).toBeInTheDocument();
    expect(screen.getByText("Book Two")).toBeInTheDocument();

    // Check if delete button works
    const deleteButtons = screen.getAllByText("Delete");
    fireEvent.click(deleteButtons[0]);
    expect(deleteBook).toHaveBeenCalledWith("1");

    // Check if View button works
    const viewButtons = screen.getAllByText("View");
    fireEvent.click(viewButtons[0]);
    expect(setSelectedBook).toHaveBeenCalledWith(mockBooks[0]);
});
