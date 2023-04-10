import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { Link, Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div className="text-center mt-5">
        <Link to="/login" className=" btn btn-primary mb-3 fs-3">
          Go To Login Page
        </Link>
        <br />
        <Link to="/registration" className="btn btn-primary fs-3">
          Go To Registration Page
        </Link>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
