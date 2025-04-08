import { configureStore } from "@reduxjs/toolkit";
import userSlice from './slices/userSlice'
import toggleSlice from './slices/toggleSlice'

const store = configureStore({
    reducer: {
        user: userSlice,
        toggle: toggleSlice
    },
})

export default store;