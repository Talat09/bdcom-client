import { createBrowserRouter } from "react-router-dom";
import Main from "../../layOut/Main";
import Login from "../../components/Login/Login";
import Registration from "../../components/Registration/Registration";
import Home from "../../components/Home/Home";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Dashboard from "../../components/Dashboard/Dashboard";
import AllProducts from "../../components/AllProducts/AllProducts";
import Samsung from "../../components/Samsung/Samsung";
import AddProduct from "../../components/AddProduct/AddProduct";
import Laptop from "../../components/Laptop/Laptop";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: (
          <PrivateRoute>
            <Home></Home>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard></Dashboard>
          </PrivateRoute>
        ),
        children: [
          {
            path: "/dashboard",
            element: <AllProducts></AllProducts>,
          },
          {
            path: "/dashboard/samsung",
            element: <Samsung></Samsung>,
          },
          {
            path: "/dashboard/laptop",
            element: <Laptop></Laptop>,
          },
          {
            path: "/dashboard/addProduct",
            element: <AddProduct></AddProduct>,
          },
        ],
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
    ],
  },
]);
