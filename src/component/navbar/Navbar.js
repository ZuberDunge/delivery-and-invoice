import React from 'react'
import "../Style/Nav.css"
import { NavLink } from 'react-router-dom'
function Navbar() {


    const user = localStorage.getItem("user")
    let loggedIn = true;
    if (user == null) {
        loggedIn = false;
    }

    return (
        <div className="nav-container">
            <nav>
                <div className="brand-name"> <NavLink exact="true" to='/'> Delivery </NavLink></div>
                <div className="log-in-btn"> <NavLink exact="true" to='/login'>{loggedIn ? "View Profile" : "Login"}  </NavLink></div>
            </nav>
        </div>
    );
}

export default Navbar;