import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BookProvider from "./context/BookContext";
import BookList from "./components/BookList";
import BookForm from "./components/BookForm";
import BookDetail from "./components/BookDetail";

const App = () => {
  return (
    <BookProvider>
      <Router>
        <Routes>
          <Route path="/" element={<BookList />} />
          <Route path="/books/new" element={<BookForm />} />
          <Route path="/books/:id" element={<BookDetail />} />
        </Routes>
      </Router>
    </BookProvider>
  );
};


export default App;
