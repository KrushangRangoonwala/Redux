import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    fetchNewData: false,
    availableId: 11,
}

const toggleSlice = createSlice({
    name: 'fetchNewData',
    initialState: initialState,
    reducers: {
        toggle: (state,action) => {
            state.fetchNewData = action.payload
        },
        setAvailableId:  (state,action) => {
            state.availableId += 1;
        }
    }
})

export const { toggle,setAvailableId } = toggleSlice.actions;
export default toggleSlice.reducer; 