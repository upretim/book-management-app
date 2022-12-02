import React, { useContext } from "react";
import BookForm from "./BookForm";
import BooksContext from "../context/BooksContext";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const { books, setBooks } = useContext(BooksContext);
  const history = useNavigate();

  const handleOnSubmit = (book) => {
    setBooks([book, ...books]);
    history("/");
  };

  return <>{<BookForm handleOnSubmit={handleOnSubmit} />}</>;
};

export default AddBook;
