import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { AuthContext } from "../../context/AuthProvider";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { setUser, setLoading } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;

    fetch(`https://bdcom-server.vercel.app/users/${email}`, {
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.email);
        if (data.email) {
          setUser(data);
          setLoading(false);
          navigate("/dashboard");
        } else {
          setError(
            " Sorry your Email does not match Please Register Your Email"
          );
        }
      });
  };
  return (
    <div>
      <Form
        onSubmit={handleLogin}
        className="w-50 mx-auto mt-5 border border-primary p-5 rounded"
      >
        <h1 className="text-left text-primary">Login</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <p className="text-danger">{error}</p>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Login;
