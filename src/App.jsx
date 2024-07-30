import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import Login from './pages/Auth/Login.jsx'
import Register from './pages/Auth/Register.jsx'

function App() {
 

  return (
    <>
      <div className='app'> 
        <BrowserRouter>
          <Routes path='/' element={<Home/>}/>
          <Routes path='/login' element={<Login/>}/>
          <Routes path='/login' element={<Register/>}/>
        </BrowserRouter>

      </div>
    </>
  )
}

export default App
