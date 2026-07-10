import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "./cartSlice";

const ProductList = () => {
  const dispatch = useDispatch();
  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 50000,
    },
    {
      id: 2,
      name: "Phone",
      price: 30000,
    },
    {
      id: 3,
      name: "Headphones",
      price: 2000,
    },
  ];

  function handleAddToCart(product) {
    dispatch(addToCart(product));
  }

  return (
    <div>
      <h2>Products</h2>

      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>

          <p>₹{product.price}</p>

          <button onClick={() => handleAddToCart(product)}>Add To Cart</button>

          <hr />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
