import React from 'react';
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCouch, faUser, faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { StyledNav } from '../styles/Nav.styled';

library.add(faCouch, faUser, faCartShopping, faMagnifyingGlass);

export default function Nav() {
    return (
        <StyledNav>
            <a className="active" href="#home"><span><FontAwesomeIcon icon="couch" /></span>Retro Wares</a>
            <a href="#furniture">Furniture</a>
            <a href="#rugs">Rugs</a>
            <a href="#decor">Decor</a>
            <a href="#lighting">Lighting</a>
            <div><FontAwesomeIcon icon="cart-shopping" /></div>
            <div><FontAwesomeIcon icon="user" /></div>
            <input type="text" placeholder="Search Products..."></input>
        </StyledNav>
    )
}