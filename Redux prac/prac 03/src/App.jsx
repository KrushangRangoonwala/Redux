import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './Pages/Home'
import Login from './Pages/Login'
import ProductList from './Pages/ProductList'
import AuthorityGaurd from './AuthorityGaurd'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AuthorityGaurd><Home /></AuthorityGaurd>} />
          {/* <Route path='/login' element={<Login />} /> */}
          <Route path='/productList' element={<ProductList />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
