import React from "react";
import useProducts from "../../hooks/useProducts";
import { Button, Card } from "react-bootstrap";

const Laptop = () => {
  const [products] = useProducts();
  const laptops = products.filter(
    (product) => product.subcategory === "Laptop"
  );
  return (
    <section>
      <h1 className="text-center">Laptop</h1>
      <div className="d-flex justify-content-evenly flex-row flex-wrap  mt-5">
        {laptops.map((laptop) => (
          <Card style={{ width: "18rem" }} className="mb-3" key={laptop._id}>
            <Card.Img variant="top" src={laptop.photo} />
            <Card.Body>
              <Card.Title>{laptop.name}</Card.Title>
              <Card.Text>Price: $ {laptop.price}</Card.Text>
              <Card.Text>Quantity : {laptop.quantity}</Card.Text>
              <Card.Text>Description :{laptop.description}</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Laptop;
