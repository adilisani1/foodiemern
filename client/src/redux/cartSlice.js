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

    },
})
export const { addToCart, removeCart } = cartSlice.actions

export default cartSlice.reducer