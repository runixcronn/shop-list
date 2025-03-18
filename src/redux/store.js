import { configureStore } from "@reduxjs/toolkit";
import itemsReducer from "./itemsSlice";
import cartReducer from "./cartSlice";
import ordersReducer from "./ordersSlice";

const store = configureStore({
  reducer: {
    items: itemsReducer,
    cart: cartReducer,
    orders: ordersReducer,
  },
});

export default store;
