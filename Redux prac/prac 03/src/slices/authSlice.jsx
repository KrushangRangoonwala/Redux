import { createSlice } from "@reduxjs/toolkit";


const authSlice = createSlice({
    name: 'auth',
    initialState: {
        username: '',
        age: '',
    },
    reducers: {   // in this `state` reffers attributes of this slices's initialStates's atributes, `Not Whole state`
        login: (state, action) => {
            state.username = action.payload.username;
            state.age = action.payload.age;
        },
        logout: (state, action) => {
            state.username = '';
            state.age = null;
        }
    }
})

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;