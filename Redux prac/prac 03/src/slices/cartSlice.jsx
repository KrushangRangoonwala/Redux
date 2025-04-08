import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            state.push(action.payload)
        },
        removeFromCart: (state, action) => {
            return state.filter((product) => product.id !== action.payload.id)
        },
        updateCartProduct: (state, action) => {
            const id = state.findIndex((product) => product.id === action.payload.id)
            id !== -1 ? state[id] = action.payload : '';
        }
    }
})

export const { addToCart, removeFromCart, updateCartProduct } = cartSlice.actions;
export default cartSlice.reducer;