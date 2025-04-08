import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './Pages/Home'
import UserInfo from './Pages/UserInfo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/addUser' element={<UserInfo />} />
          <Route path='/editUser/:id' element={<UserInfo />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
