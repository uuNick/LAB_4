import { createSlice } from '@reduxjs/toolkit';

const basketSlice = createSlice({
    name: 'basket',
    initialState: {
        items: [],
        error: null,
    },
    reducers: {
        // addToBasket: (state, action) => {
        //     const existingItem = state.items.find(item => item.id === action.payload.id);
        //     if (existingItem) {
        //         existingItem.quantity += 1; // Увеличиваем количество
        //     } else {
        //         state.items.push({ ...action.payload, quantity: 1 });
        //     }
        // },
        removeFromBasket: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
        updateQuantity: (state, action) => {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
                if (action.payload.quantity <= 0) {
                    state.items = state.items.filter(item => item.id !== action.payload.id);
                } else {
                    existingItem.quantity = action.payload.quantity;
                }
            }
        },
    },
});

export const { removeFromBasket, updateQuantity } = basketSlice.actions;

export default basketSlice.reducer;