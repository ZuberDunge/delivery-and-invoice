import React from 'react'
import "../Style/Nav.css"
function Navbar() {
    return (
        <div className="nav-container">
            <nav>
                <div className="brand-name">Dailyvery</div>
                <div className="log-in-btn">Login</div>
            </nav>
        </div>
    );
}

export default Navbar;