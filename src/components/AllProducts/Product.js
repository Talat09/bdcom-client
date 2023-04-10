import React from "react";
import { Button, Card } from "react-bootstrap";

const Product = ({ product }) => {
  const { name, photo, price, description, quantity } = product;
  return (
    <div className="mb-3">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={photo} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>Price: $ {price}</Card.Text>
          <Card.Text>Quantity : {quantity}</Card.Text>
          <Card.Text>Description : {description}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;
