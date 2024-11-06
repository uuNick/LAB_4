import { createSlice } from '@reduxjs/toolkit';
import data from '../data/products.json';

const initialState = {
  products: data,
  category: '',
  sortOrder: 'none',
  searchQuery: '',
  status: 'idle',
  error: null,
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
    createProduct: (state, action) => {
      state.products.push(action.payload);
    },
    updateProduct: (state, action) => {
      const { id, updatedProduct } = action.payload;
      const updatedProducts = state.products.map((product) =>
        product.id === id ? { ...product, ...updatedProduct } : product
      );
      state.products = updatedProducts; 
    },
    deleteProduct: (state, action) => {
      state.products = state.products.filter((product) => product.id !== action.payload);
    },
  },
});

export const { setCategory, setSortOrder, setSearchQuery, createProduct, updateProduct, deleteProduct } = productsSlice.actions;
export default productsSlice.reducer;
