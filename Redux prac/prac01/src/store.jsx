const ADD_TASK = 'task/add';
const DELETE_TASK = 'task/delete';
import { createStore } from "redux"



let initialState = {
    task: []
};

function addTask(val) {   // action creator function
    return { type: ADD_TASK, payload: val };
}

function deleteTask(i) {   // action creator function
    return { type: DELETE_TASK, payload: i };
}

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

//   store.dispatch({ type: ADD_TASK, payload: 'asd asd asd' });
store.dispatch(addTask('123 123 123'));
console.log(store.getState());
//   store.dispatch({ type: ADD_TASK, payload: 'fgh fgh fgh' });
store.dispatch(addTask('456 456 456'));
console.log(store.getState());
//   store.dispatch({ type: ADD_TASK, payload: 'qwe qwe qwe' });
store.dispatch(addTask('890 890 890'));
console.log(store.getState());

console.log('Delete task : ');
// store.dispatch({ type : DELETE_TASK, payload: '1'})
store.dispatch(deleteTask(1));
console.log(store.getState());
//   store.dispatch({ type : DELETE_TASK, payload: '1'})
store.dispatch(deleteTask(1));
console.log(store.getState());



