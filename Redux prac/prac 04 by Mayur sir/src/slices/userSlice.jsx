import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [],
}

const userSlice = createSlice({
    name: 'user',
    initialState: [],
    reducers: {
        deleteAllUser: (state, action) => {
            return state.filter((val) => val.id === 'a');
        },
        fetchedUsers: (state, action) => {
            // state = [];
            // console.log("state ", state);
            action.payload.forEach(val => state.push(val));
        },
        addUser: (state, action) => {
            state.push(action.payload);
        },
        editUser: (state, action) => {
            console.log("id ",action.payload.id)
            const index = state.findIndex((val) => val.id == action.payload.id);
            console.log("index ",index)
            index !== -1 ? state[index] = action.payload : null;
        },
        // editUser: (state, action) => {
        //     const { id, userDetais } = action.payload;
        //     console.log('id ', id);
        //     const index = state.findIndex((val) => val.id == id);
        //     console.log("index ", index)
        //     if (index !== -1) {
        //         Object.assign(state[index], userDetais); // ✅ safely mutates the draft
        //     }
        // },
        deleteUser: (state, action) => {
            return state.filter((val) => val.id !== action.payload)
        }
    }
})

export const { deleteAllUser, fetchedUsers, addUser, editUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;