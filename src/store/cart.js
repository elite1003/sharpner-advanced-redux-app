import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { isCartShown: false },
  reducers: {
    toggleCart(state) {
      state.isCartShown = !state.isCartShown;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
