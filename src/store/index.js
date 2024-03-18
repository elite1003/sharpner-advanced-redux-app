import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart";
import productReducer from "./product-slice";
const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
  },
});

export default store;
