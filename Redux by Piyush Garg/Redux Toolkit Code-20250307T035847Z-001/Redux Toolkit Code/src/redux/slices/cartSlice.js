// cartSlice.js
import { createSlice, createSelector } from "@reduxjs/toolkit";  

const cartSlice = createSlice({
  name: "Cart",
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      state.push(action.payload);  // states are immutable.it cannot change. but push pop methods can worked.
    },
  },
});

export const getItemsSelector = createSelector(
  (state) => state.cart,
  (state) => state
);

export const { addItem } = cartSlice.actions;

export default cartSlice.reducer;
