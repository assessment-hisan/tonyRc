import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ProductPage from './pages/ProductPage'
// import ProductDetail from "./pages/ProductDetail"
function App() {
  

  return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
     <Route path="/product/:id" element={<ProductPage />} /> 
  </Routes>
</BrowserRouter>
  )
}

export default App
