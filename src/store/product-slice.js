import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    items: [
      {
        id: "p1",
        price: 6,
        title: "My First Book",
        description: "The first book I ever wrote",
      },
      {
        id: "p2",
        price: 5,
        title: "My Second Book",
        description: "The second book I ever wrote",
      },
    ],
  },
  reducers: {},
});

export const productActions = productSlice.actions;
export default productSlice.reducer;
