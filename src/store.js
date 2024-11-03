import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './slices/productsSlice';
import busketReducer from './slices/basketSlice';

const store = configureStore({
    reducer: {
        products: productsReducer,
        basket: busketReducer,
    },
});

export default store;