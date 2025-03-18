import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [], // Ürünler burada tutulacak
  filteredItems: [], // Filtrelenmiş ürünler burada tutulacak
};

const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
      state.filteredItems = action.payload; // Başlangıçta filtrelenmiş ürünler tüm ürünlerdir
    },
    filterByCategory: (state, action) => {
      const category = action.payload;
      state.filteredItems = state.items.filter(
        (item) => item.category === category
      );
    },
  },
});

export const { setItems, filterByCategory } = itemsSlice.actions;
export default itemsSlice.reducer;
