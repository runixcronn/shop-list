import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: []
};

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    addToOrders: (state, action) => {
      state.items = [action.payload, ...state.items];
    },
    removeFromOrders: (state, action) => {
      state.items = state.items.filter(order => order.orderId !== action.payload.id);
    }
  }
});

export const { addToOrders, removeFromOrders } = ordersSlice.actions;
export default ordersSlice.reducer;