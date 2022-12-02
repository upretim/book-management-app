import React, { useContext } from "react";
import Book from "./Book";
import BooksContext from "../context/BooksContext";

const BooksList = () => {
  const { books, setBooks } = useContext(BooksContext);

  const handleRemoveBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <>
      <div className="book-list">
        {books.length > 0 ? (
          books.map((book) => (
            <Book key={book.id} {...book} handleRemoveBook={handleRemoveBook} />
          ))
        ) : (
          <p className="message">No books available. Please add some books.</p>
        )}
      </div>
    </>
  );
};

export default BooksList;
