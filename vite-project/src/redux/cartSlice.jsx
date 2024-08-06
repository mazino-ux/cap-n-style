import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem('cart')) ?? [];

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            state.push(action.payload);
            localStorage.setItem('cart', JSON.stringify(state)); // Save to localStorage
        },
        deleteFromCart(state, action) {
            const newState = state.filter(item => item.id !== action.payload.id);
            localStorage.setItem('cart', JSON.stringify(newState)); // Save to localStorage
            return newState;
        }
    }
})

export const { addToCart, deleteFromCart } = cartSlice.actions;

export default cartSlice.reducer;
