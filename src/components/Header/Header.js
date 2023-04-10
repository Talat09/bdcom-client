import React, { useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const Header = () => {
  const { user } = useContext(AuthContext);
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link to="/" className="text-decoration-none text-white fs-1">
          BDCOM
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Link
            to="/login"
            className="text-decoration-none text-white  me-4 fs-5 "
          >
            Login
          </Link>
          <Link
            to="/registration"
            className="text-decoration-none text-white me-4 fs-5 "
          >
            Registration
          </Link>
          {user && (
            <Nav className="mt-3">
              <Link
                to="/dashboard"
                className="text-decoration-none text-white me-4 fs-5"
              >
                Dashboard
              </Link>
              <p className=" fs-5 text-white d-flex align-items-center ms-2 ">
                {user?.name}
              </p>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
