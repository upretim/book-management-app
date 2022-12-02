import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Book = ({
  id,
  bookname,
  author,
  price,
  quantity,
  isbn,
  date,
  handleRemoveBook,
}) => {
  const history = useNavigate();

  return (
    <Card className="book">
      <Card.Body>
        <Card.Title className="book-title">{bookname}</Card.Title>
        <div className="book-details">
          <div>ISBN: {isbn}</div>
          <div>Author: {author}</div>
          <div>Quantity: {quantity} </div>
          <div>Price: {price} </div>
          <div>Date: {new Date(date).toDateString()}</div>
        </div>
        <Button variant="success" onClick={() => history(`/edit/${id}`)}>
          Edit
        </Button>
        <Button variant="warning" onClick={() => handleRemoveBook(id)}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Book;
