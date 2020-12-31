import React from 'react';
import { NavLink } from 'react-router-dom';
import Cart from '../../assets/eshopping.jpg';
import './Navbar.css';

const Nav = () => {

    return (
        <div>
            <nav className="main-nav">
                <div className="main-nav-logo">
                    <NavLink to="/"><img className="logo" src={Cart} alt="smartcart logo" /></NavLink>
                </div>
                <nav className="main-nav-items">
                    <ul>
                        <li><NavLink to="/shop">Shop</NavLink></li>
                    </ul>
                </nav>
            </nav>
            <hr />
        </div>
    )
}

export default Nav;