import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Home from './pages/Home/style.jsx'
import Login from './pages/Auth/Login.jsx'
import Register from './pages/Auth/Register.jsx'
import { GlobalStyle } from './GlobalStyle/Global.js'

function App() {
 

  return (
    <>
      <GlobalStyle/>
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
