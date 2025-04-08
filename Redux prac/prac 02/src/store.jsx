import { createStore } from "redux"

const ADD_TASK = 'task/add';
const DELETE_TASK = 'task/delete';

let initialState = [];

export function addTask() {
    
}

export function deleteTask() {

}

let taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK : 
            
            break;
    
        default:
            break;
    }
}

let store = createStore(taskReducder)

export default store;