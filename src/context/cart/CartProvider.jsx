import React, { useState } from 'react'
import CartContext from './CartContext';

const CartProvider = ({children}) => {
  const [cartItems,setCartItems] = useState([]);

  function addToCart(product){
    setCartItems((prev)=>[...prev,product]);
  }

  return (
    <CartContext.Provider value={{cartItems,addToCart}}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider