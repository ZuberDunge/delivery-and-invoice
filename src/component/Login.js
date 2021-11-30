import React, { useState } from 'react'
import "./Style/Login.css"
import { useNavigate } from "react-router-dom";
import UserProfile from './user';
function Login() {
    var [emailValue, setEmail] = useState("")
    var [passValue, setPass] = useState("")
    let back = useNavigate();

    const checkValid = (e) => {
        e.preventDefault();
        if (emailValue === "a" && passValue === "a") {
            localStorage.setItem("user", "loggged")
        } else {
            alert("invalid")
        }
        back("/login")
    }

    const user = localStorage.getItem("user")
    let loggedIn = true;
    if (user == null) {
        loggedIn = false;
    }

    return (
        <div className="login-page">
            {
                loggedIn ? <UserProfile /> :
                    <div className="Log-in">
                        <h2 className="border-btm margauto">Welcome Back!</h2>

                        <form className="login-form">
                            <input required
                                onChange={e => setEmail(e.target.value)}
                                placeholder="Enter Your Email" type="email" />

                            <input onChange={e => setPass(e.target.value)}
                                required placeholder="Enter Your Password" type="Password" />

                            <button type="submit" onClick={checkValid} className="login-btn" >Log In</button>


                        </form>
                    </div>
            }

        </div>
    );
}

export default Login;