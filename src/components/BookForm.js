import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

const BookForm = (props) => {
  const [book, setBook] = useState(() => {
    return {
      bookname: props.book ? props.book.bookname : "",
      author: props.book ? props.book.author : "",
      quantity: props.book ? props.book.quantity : "",
      price: props.book ? props.book.price : "",
      date: props.book ? props.book.date : "",
      isbn: props.book ? props.book.isbn : "",
    };
  });

  const [errorMsg, setErrorMsg] = useState("");
  const { bookname, author, price, quantity, isbn } = book;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [bookname, author, price, quantity];
    let errorMsg = "";

    const isFormValid = values.every((field) => {
      const value = `${field}`.trim();
      return value !== "" && value !== "0";
    });

    if (isFormValid) {
      const book = {
        id: uuidv4(),
        bookname,
        author,
        price,
        quantity,
        isbn,
        date: new Date(),
      };
      props.handleOnSubmit(book);
    } else {
      errorMsg = "Please fill out all the fields.";
    }
    setErrorMsg(errorMsg);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "quantity":
        if (value === "" || parseInt(value) === +value) {
          setBook((prevState) => ({
            ...prevState,
            [name]: value,
          }));
        }
        break;
      case "price":
        if (value === "" || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
          setBook((prevState) => ({
            ...prevState,
            [name]: value,
          }));
        }
        break;
      default:
        setBook((prevState) => ({
          ...prevState,
          [name]: value,
        }));
    }
  };

  return (
    <div className="main-form">
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <Form onSubmit={handleOnSubmit} className="book-form">
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="bookname"
            value={bookname}
            placeholder="Book Name"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="author">
          <Form.Label>Book Author</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="author"
            value={author}
            placeholder="Author"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="quantity">
          <Form.Label>Quantity</Form.Label>
          <Form.Control
            className="input-control"
            type="number"
            name="quantity"
            value={quantity}
            placeholder="Available Quantity"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="price">
          <Form.Label>Book Price</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="price"
            value={price}
            placeholder="Price"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="isbn">
          <Form.Label>Book's ISBN</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="isbn"
            value={isbn}
            placeholder="ISBN"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="success" type="submit" className="submit-btn">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default BookForm;
