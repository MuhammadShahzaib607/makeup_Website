import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './components/login/Login'
import Signup from './components/signup/Signup'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Products from './pages/products/Products'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'

function App() {


  return (
    <>
    <Navbar />
<Routes>
  <Route path='/' element={<Home />} />
  <Route path='/about' element={<About />} />
  <Route path='/contact' element={<Contact />} />
  <Route path='/products' element={<Products />} />
</Routes>
<Footer />
</>
  )
}

export default App
