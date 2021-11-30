import React from 'react'
import "../Style/Nav.css"
import { NavLink } from 'react-router-dom'
function Navbar() {
    return (
        <div className="nav-container">
            <nav>
                <div className="brand-name"> <NavLink exact="true" to='/'> Delivery </NavLink></div>
                <div className="log-in-btn"> <NavLink exact="true" to='/login'> Login </NavLink></div>
            </nav>
        </div>
    );
}

export default Navbar;