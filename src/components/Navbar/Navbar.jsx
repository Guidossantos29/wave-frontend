import React from 'react'
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import {
  BsSearch,
  BsHouseDoorFill,
  BsFillPersonFill,
  BsFillCameraFill,
} from "react-icons/bs";


function Navbar() {
  return (
   
    <Router>
      <div>
      <NavLink to='/'>Wave</NavLink>
      <form>
         <BsSearch/>
         <input type="text" />
      </form>
      <ul>
        <NavLink to='/' > <BsHouseDoorFill/></NavLink>
        <NavLink to='/login' >Entrar</NavLink>
        <NavLink to='/register'>Cadastrarr</NavLink>
      </ul>
      </div>
    </Router>
  )
}

export default Navbar
