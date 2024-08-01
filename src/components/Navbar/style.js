import { NavLink } from "react-router-dom";
import styled from "styled-components";


export const NavbarContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #000;
    border-bottom: 1px solid #363636;
    padding: 0.1em 1em;
`

export const SearchForm = styled.form`
     display: flex;
     flex-direction: row;
     align-items: center;
     gap: 10px;


`

export const InputNavBar = styled.input`
    border: 2px solid #e8e8e8;
    padding: 10px;
    border-radius: 10px;
    background-color: #212121;
    font-size: small;
    font-weight: bold;
    text-align: center;
`

export const NavLinksContainer = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
`
export const NavLinkstyle = styled(NavLink)`
     display: flex;
     color: white;
     font-weight: bold;
     text-decoration: none;

    &.active {
    color: red;
  }
`;


