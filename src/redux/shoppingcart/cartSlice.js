import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart(state, action) {
      const existingState = state.items.find(
        (item) => item.id === action.payload.id,
      );

      if (existingState) {
        existingState.quantity++;
      } else {
        state.items.push({
          ...action.payload,
          quantity: 1,
        });
      }
    },
    removeFromCart(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    decreaseQuantity(state, action) {
      const existingItem = state.items.find(
        (item) => item.id === action.payload,
      );
      if (existingItem.quantity > 1) {
        existingItem.quantity--;
      } else {
        state.items = state.items.filter((item) => item.id !== action.payload);
      }
    },
    increaseQuantity(state, action) {
      const existingItem = state.items.find(
        (item) => item.id === action.payload,
      );
      if (existingItem) {
        existingItem.quantity++;
      }
    },
  },
});

export const { addToCart, removeFromCart, decreaseQuantity ,increaseQuantity} =
  cartSlice.actions;

export default cartSlice.reducer;
