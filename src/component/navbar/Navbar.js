import React, { useEffect } from 'react'
import "../Style/Nav.css"
import { NavLink } from 'react-router-dom'
function Navbar() {
    const [isValid, setIsValid] = React.useState(true)
    const user = localStorage.getItem("user")

    useEffect(() => {
        console.log(user)
        if (user == null) {
            setIsValid(false);
        }
    }, [user]);


    return (
        <div className="nav-container">
            <nav>
                <div className="brand-name"> <NavLink exact="true" to='/'> Delivery </NavLink></div>
                <div className="log-in-btn" id="login-text">
                    <NavLink exact="true" to='/login'>
                        {isValid ? "View Profile" : "Login"}
                    </NavLink></div>
            </nav>
        </div>
    );
}

export default Navbar;