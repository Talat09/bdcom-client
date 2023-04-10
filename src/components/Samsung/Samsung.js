import React from "react";
import useProducts from "../../hooks/useProducts";
import { Button, Card } from "react-bootstrap";

const Samsung = () => {
  const [products] = useProducts();
  const samsungs = products.filter(
    (product) => product.subcategory === "Samsung"
  );
  return (
    <section className="mt-5">
      <h1 className="text-center">Samsung Phone</h1>
      <div className="d-flex justify-content-evenly flex-row flex-wrap ">
        {samsungs.map((samsung) => (
          <Card
            style={{ width: "18rem", height: "18rem" }}
            className="mb-3"
            key={samsung._id}
          >
            <Card.Img variant="top" src={samsung.photo} />
            <Card.Body>
              <Card.Title>{samsung.name}</Card.Title>
              <Card.Text>Price: $ {samsung.price}</Card.Text>
              <Card.Text>Quantity : {samsung.quantity}</Card.Text>
              <Card.Text>Description :{samsung.description}</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Samsung;
