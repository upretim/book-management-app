import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import AddBook from "../components/AddBook";
import BooksList from "../components/BooksList";
import useLocalStorage from "../hooks/useLocalStorage";
import EditBook from "../components/EditBook";
import BooksContext from "../context/BooksContext";
import Footer from "../components/Footer";

const AppRouter = () => {
  const [books, setBooks] = useLocalStorage("books", []);

  return (
    <>
      <Header />
      <div className="main-content">
        <BooksContext.Provider value={{ books, setBooks }}>
          <Routes>
            <Route path="/" element={<BooksList />} exact />
            <Route path="/add" element={<AddBook />} />
            <Route path="/edit/:id" element={<EditBook />} />
          </Routes>
        </BooksContext.Provider>
      </div>
      <Footer />
    </>
  );
};

export default AppRouter;
