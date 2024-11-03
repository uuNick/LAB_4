// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   items: [],
// };

// const basketSlice = createSlice({
//   name: 'basket',
//   initialState,
//   reducers: {
//     addItem: (state, action) => {
//       state.items.push(action.payload);
//     },
//     removeItem: (state, action) => {
//       state.items = state.items.filter((item) => item.id !== action.payload.id);
//     },
//   },
// });

// export const { addItem, removeItem } = basketSlice.actions;
// export default basketSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    basketItems: [],
    totalCount: 0,
};

const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addItem: (state, action) => {
            state.basketItems.push(action.payload);
            state.totalCount++;
        },
        removeItem: (state, action) => {
            state.basketItems = state.basketItems.filter((item) => item.id !== action.payload.id);
            state.totalCount--;
        },
        updateItemQuantity: (state, action) => {
            const { itemId, newQuantity } = action.payload;
            if (state.basketItems[itemId]) {
                const diff = newQuantity - state.basketItems[itemId].quantity;
                state.basketItems[itemId].quantity = newQuantity;
                state.totalCount += diff;
            }
        },
        clearBusket: (state) => {
            state.basketItems = {};
            state.totalCount = 0;
        },
    },
});

export const { addItem, removeItem, updateItemQuantity, clearBusket } = basketSlice.actions;
export default basketSlice.reducer;