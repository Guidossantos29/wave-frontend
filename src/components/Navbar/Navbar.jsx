import React from 'react'
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import {
  BsSearch,
  BsHouseDoorFill,
  BsFillPersonFill,
  BsFillCameraFill,
} from "react-icons/bs";
import { InputNavBar, NavbarContainer, NavLinksContainer, NavLinkstyle, SearchForm } from './style';


function Navbar() {
  return (
   
    <Router>
      <NavbarContainer>
      <NavLink to='/'>Wave</NavLink>
      <SearchForm>
         <BsSearch/>
         <InputNavBar placeholder='' type="text" />
      </SearchForm>
      <NavLinksContainer>
        <NavLinkstyle to='/' > <BsHouseDoorFill/></NavLinkstyle>
        <NavLinkstyle to='/login' >Entrar</NavLinkstyle>
        <NavLinkstyle to='/register'>Cadastrar</NavLinkstyle>
      </NavLinksContainer>
      </NavbarContainer>
    </Router>
  )
}

export default Navbar
