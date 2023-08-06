import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cartItems: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {

            const itemInCart = state.cartItems.find((item) => item._id === action.payload._id);
            if (itemInCart) {
                itemInCart.qty++;
            } else {
                state.cartItems.push({ ...action.payload, qty: 1 });
            }

        },
        removeCart: (state, action) => {
            state.cartItems = state.cartItems.filter(item => item._id !== action.payload._id)
        },

        inCreament: (state, action) => {
            const exist = state.cartItems.find((item) => item._id === action.payload._id);
            if (exist) {
                exist.qty++;
            } else {
                state.cartItems.push({ ...action.payload, qty: 1 });
            }
        },

        deCreament: (state, action) => {
            const exist = state.cartItems.find((item) => item._id === action.payload._id);
            if (exist.qty === 1) {
                state.cartItems = state.cartItems.filter((item) => item._id !== action.payload._id);
            } else {
                state.cartItems.map((item) => item._id === action.payload._id ? { ...exist, qty: exist.qty-- } : item)
            }
        },
    },
})
export const { addToCart, removeCart, inCreament, deCreament } = cartSlice.actions

export default cartSlice.reducer