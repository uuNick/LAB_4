import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        items: [],
        error: null,
    },
    reducers: {
        setProducts: (state, action) => {
            state.items = action.payload;
        },
        addProduct: (state, action) => {
            if (!state.items.find(product => product.id === action.payload.id)) {
                state.items.push(action.payload);
            } else {
                state.error = 'Товар уже добавлен в каталог';
            }
        },
        removeProduct: (state, action) => {
            state.items = state.items.filter(product => product.id !== action.payload);
        },
    },
});

export const { setProducts, addProduct, removeProduct } = productsSlice.actions;

export default productsSlice.reducer;