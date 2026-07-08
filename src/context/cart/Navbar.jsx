import React, { useContext } from "react";
import CartContext from "./CartContext";

const Navbar = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div>
      <h1>🛒 Cart : {cartItems.length}</h1>
      <hr />
    </div>
  );
};

export default Navbar;