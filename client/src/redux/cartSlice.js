import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cartItems: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            // const item = state.cartItems.find((item) => item.id === action.payload.id);

            // if (item) {
            //     item.qty++;
            // }
            // else {
            //     state.cartItems.push({ ...action.payload })
            // }
            const itemInCart = state.cartItems.find((item) => item.id === action.payload.id);
            if (itemInCart) {
                itemInCart.qty++;
            } else {
                state.cartItems.push({ ...action.payload, qty: 1 });
            }

        },
        removeCart: (state, action) => {
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id)
        },

    },
})
export const { addToCart, removeCart } = cartSlice.actions

export default cartSlice.reducer