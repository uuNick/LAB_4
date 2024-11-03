import { createSlice } from '@reduxjs/toolkit';
import data from '../data/products.json';

const initialState = {
  products: data,
  //status: 'idle',
  error: null,
  filters: {
    type: 'all',
    price: null,
  },
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setFilters: (state, action) => {
      state.filters = action.payload;
    },
    setError: (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    },
  },
});

export const { setFilters, setError } = productsSlice.actions;
export default productsSlice.reducer;
