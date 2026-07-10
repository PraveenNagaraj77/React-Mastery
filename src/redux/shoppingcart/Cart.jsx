import { useDispatch, useSelector } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "./cartSlice";

const Cart = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  function handleRemove(id) {
    dispatch(removeFromCart(id));
  }

  function handleDecrease(id) {
    dispatch(decreaseQuantity(id));
  }

  function handleIncrease(id) {
    dispatch(increaseQuantity(id));
  }

  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const totalQuantity = cartItems.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  return (
    <div>
      <h2>Shopping Cart</h2>

      <h3>Total Items : {cartItems.length}</h3>

      {cartItems.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>

          <p>₹{item.price}</p>

          <div>
            <button onClick={() => handleDecrease(item.id)}>-</button>

            <span style={{ margin: "0 10px" }}>{item.quantity}</span>

            <button onClick={() => handleIncrease(item.id)}>+</button>
          </div>

          <button onClick={() => handleRemove(item.id)}>Remove</button>

          <hr />
        </div>
      ))}
      <h3>Total Price : ₹{totalPrice}</h3>
      <h3>🛒 Cart ({totalQuantity})</h3>
    </div>
  );
};

export default Cart;
