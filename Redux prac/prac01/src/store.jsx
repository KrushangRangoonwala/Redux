const ADD_TASK = 'task/add';
const DELETE_TASK = 'task/delete';
import { createStore } from "redux"



let initialState = {
    task: []
};


let taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,
                task: [...state.task, action.payload],
            }

        case DELETE_TASK:
            let updateTask = state.task.filter((curTask, index) => {
                return index != action.payload;
            })
            console.log("updateTask ", updateTask);
            return {
                ...state,
                task: updateTask,
            }

        default:
            return state; // imp to write
    }
}

let store = createStore(taskReducer);
console.log("store ", store);
console.log(store.getState());

  store.dispatch({ type: ADD_TASK, payload: 'asd asd asd' });
console.log(store.getState());
  store.dispatch({ type: ADD_TASK, payload: 'fgh fgh fgh' });
console.log(store.getState());
  store.dispatch({ type: ADD_TASK, payload: 'qwe qwe qwe' });
console.log(store.getState());

console.log('Delete task : ');
store.dispatch({ type : DELETE_TASK, payload: '1'})
console.log(store.getState());
  store.dispatch({ type : DELETE_TASK, payload: '1'})
console.log(store.getState());



