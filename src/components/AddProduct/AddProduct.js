import React from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const navigate = useNavigate();
  const handleAddProduct = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const subcategory = form.subcategory.value;
    const model = form.model.value;
    const productId = form.productId.value;
    const description = form.description.value;
    const quantity = form.quantity.value;
    const price = form.price.value;
    const photo = form.photo.value;
    const product = {
      name: name,
      subcategory: subcategory,
      model: model,
      productId: productId,
      photo: photo,
      description: description,
      quantity: quantity,
      price: price,
    };
    fetch("https://bdcom-server.vercel.app/allproducts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        navigate("/dashboard");
      });
    console.log(product);
    form.reset();
  };
  const subcategory = ["Laptop", "Samsung", "Dell", "Electronics"];
  return (
    <div>
      <Form
        onSubmit={handleAddProduct}
        className="w-50 mx-auto mt-5 border border-primary p-5 rounded mb-5"
      >
        <h1 className="text-left text-primary">Add Product</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Enter Product Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Product Name"
            name="name"
          />
        </Form.Group>

        <label htmlFor="basic-url" className="form-label">
          Select Subcategory
        </label>
        <select
          className="form-select"
          aria-label="Default select example"
          name="subcategory"
        >
          {subcategory.map((s, i) => (
            <option key={i} value={s}>
              {s}
            </option>
          ))}
        </select>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Enter Product Model</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Product Model"
            name="model"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Enter Product Id</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Product Id"
            name="productId"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Enter Photo URL</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Photo URL"
            name="photo"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Enter description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Description"
            name="description"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Enter Quantity</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter Quantity"
            name="quantity"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Enter Product Price</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter Product Price"
            name="price"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AddProduct;
