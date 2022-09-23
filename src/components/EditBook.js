import React, { useContext } from "react";
import BookForm from "./BookForm";
import { useParams } from "react-router-dom";
import BooksContext from "../context/BooksContext";
import { useNavigate } from "react-router-dom";

const EditBook = () => {
  const { books, setBooks } = useContext(BooksContext);
  const { id } = useParams();
  const bookToEdit = books.find((book) => book.id === id);
  const history = useNavigate();
  const handleOnSubmit = (book) => {
    const filteredBooks = books.filter((book) => book.id !== id);
    setBooks([book, ...filteredBooks]);
    history("/");
  };
  return <BookForm book={bookToEdit} handleOnSubmit={handleOnSubmit} />;
};

export default EditBook;
