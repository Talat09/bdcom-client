import React from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const navigate = useNavigate();
  const handleRegistration = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const phone = form.phone.value;
    const address = form.address.value;
    const employid = form.employid.value;
    const status = form.status.value;
    const user = {
      name: name,
      email: email,
      password: password,
      phone: phone,
      address: address,
      employid: employid,
      status: status,
    };
    fetch("https://bdcom-server.vercel.app/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(user.email);
        getUserToken(user.email);
      });
  };
  const getUserToken = (email) => {
    fetch(`https://bdcom-server.vercel.app/jwt?email=${email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.accessToken);
        if (data.accessToken) {
          localStorage.setItem("accessToken", data.accessToken);
          navigate("/dashboard");
        }
      });
  };
  return (
    <div>
      <Form
        onSubmit={handleRegistration}
        className="w-50 mx-auto mt-5 border border-primary p-5 rounded"
      >
        <h1 className="text-left text-primary"> Registration</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Name" name="name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Email" name="email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Phone</Form.Label>
          <Form.Control type="text" placeholder="Phone" name="phone" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>EmployId</Form.Label>
          <Form.Control type="text" placeholder="EmployId" name="employid" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" placeholder="Address" name="address" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Status</Form.Label>
          <Form.Control type="text" placeholder="Status" name="status" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Registration;
