import React from "react";
import Product from "./Product";
import useProducts from "../../hooks/useProducts";

const AllProducts = () => {
  const [products] = useProducts();

  return (
    <div>
      <h1 className="text-center my-3">All Product</h1>
      <div className="d-flex justify-content-evenly flex-row flex-wrap ">
        {products.map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
