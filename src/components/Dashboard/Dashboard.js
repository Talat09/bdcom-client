import React from "react";
import { Button } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <h1 className="my-5 text-center">Welcome To Dashboard</h1>
      <div className="d-flex justify-content-center">
        <Link to="/dashboard">
          <Button className="btn btn-primary mx-3">All Products</Button>
        </Link>
        <Link to="/dashboard/samsung">
          <Button className="btn btn-primary me-3">Samsung</Button>
        </Link>
        <Link to="/dashboard/laptop">
          <Button className="btn btn-primary me-3">Laptop</Button>
        </Link>
        <Link to="/dashboard/addProduct">
          <Button className="btn btn-primary">Add Product</Button>
        </Link>
      </div>

      <Outlet></Outlet>
    </div>
  );
};

export default Dashboard;
