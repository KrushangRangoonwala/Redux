// App.jsx
import { useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTask, deleteTask } from './store';
import './App.css'

function App() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const task = useRef();
  const n = useRef();

  function handleNewTask() {
    dispatch(addTask(task.current.value));   // same as <-- store.dispatch(addTask('123 123 123'));
  }

  function handleDelete(){
    dispatch(deleteTask(n.current.value));
  }

  return (
    <>
      <h1>Hii</h1>

      <input type="text" ref={task}/>
      <button onClick={handleNewTask}>Add</button>

      <input type="number" ref={n} />
      <button onClick={handleDelete}>Delete</button>

      {state.task.map((currentItem, index) => {
        return <li key={currentItem}> {currentItem} </li>
      })}

    </>
  )
}

export default App