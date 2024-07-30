import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/style.jsx'
import Login from './pages/Auth/Login.jsx'
import Register from './pages/Auth/Register.jsx'
import { GlobalStyle } from './GlobalStyle/Global.js'
import Navbar from './components/Navbar/Navbar.jsx'
import Footer from './components/Footer/Footer.jsx'

function App() {
  return (
    <>
      <GlobalStyle/>
      <Navbar/>
      <div> 
        <BrowserRouter >
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
          </Routes>
        </BrowserRouter>
      </div>
      <Footer/>
    </>
  )
}

export default App
