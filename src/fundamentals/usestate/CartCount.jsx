import React, { useState } from 'react'

const CartCount = () => {
    const[cart,setCart] = useState(0);

    function addToCart(){
        setCart(prev=>prev+1);
    }

    function removeItem(){
        setCart(prev=>prev>0?prev-1:0);
    }

    function resetCart(){
        setCart(0);
    }

  return (
    <div>
        <h1>CartCount</h1>
        <h2>Cart Items : {cart}</h2>
        <button onClick={addToCart}>Add to Cart</button>
        <button onClick={removeItem}>Remove Item</button>
        <button onClick={resetCart}>Reset Cart</button>
    </div>
  )
}

export default CartCount