import React, { useContext } from "react";
import CartContext from "./CartContext";

const ProductList = () => {
  const { addToCart } = useContext(CartContext);

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
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h2>Name:{product.name}</h2>
          <h2>Price:{product.price}</h2>
          <button onClick={() => addToCart(product)}>Add To Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
