import { createSlice } from '@reduxjs/toolkit';
import data from '../data/products.json';

const initialState = {
  products: data,
  category: '',
  sortOrder: 'none',
  searchQuery: '',
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setSortOrder: (state, action) => {
      state.sortOrder = action.payload;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
});

export const { setCategory, setSortOrder, setSearchQuery } = productsSlice.actions;
export default productsSlice.reducer;
