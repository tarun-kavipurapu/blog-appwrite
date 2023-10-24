// store.js
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice"; // Replace with your reducer file

const store = configureStore({
  reducer: {
    auth: authReducer, // Replace with your reducer
  },
});

export default store;
