import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Nav = () => {

    return (
        <div>
            <nav className="main-nav">
                <div className="main-nav-logo">
                    <NavLink to="/">SmartCart</NavLink>
                </div>
                <nav className="main-nav-items">
                    <ul>
                        <li><NavLink to="/orders">Orders</NavLink></li>
                        <li><NavLink to="/shop">Shop</NavLink></li>
                    </ul>
                </nav>
            </nav>
            <hr style={{ width: '90%', marginTop: '2em' }} />
        </div>
    )
}

export default Nav;