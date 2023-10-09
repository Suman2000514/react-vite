import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Counter from '../Components/Counter'
import Quotes from '../Components/Quotes';

import Login from '../Components/Login';
import Signup from '../Components/SIgnup'
import Navbar from '../Components/Navbar'
  import { ToastContainer, toast } from 'react-toastify';
 
import Product from '../Components/Product'

function App() {
  

  return (
     <>
       
      <Navbar/>
    
      <Routes>
    <Route path="/counter" element={<Counter />} />
    <Route path="/quotes" element={<Quotes />}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/product' element={<Product/>}/>
  </Routes>
 <ToastContainer />

 
    </>
  )
}

export default App
