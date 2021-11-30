import React, { useState, useEffect } from 'react'
import "./Style/Login.css"
import { useNavigate } from "react-router-dom";
import UserProfile from './user';
import Navbar from './navbar/Navbar';
function Login() {

    const [isValid, setIsValid] = useState(true)
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
        back("/")
    }

    const user = localStorage.getItem("user")
    useEffect(() => {
        if (user == null) {
            setIsValid(false)
        }
    }, [user]);


    return (
        <>
            {isValid ? <UserProfile /> : <>
                <Navbar />
                <div className="login-page">
                    <div className="Log-in">
                        <h2 className="border-btm margauto">Welcome Back!</h2>
                        <form className="login-form">
                            <input required
                                onChange={e => setEmail(e.target.value)}
                                placeholder="Enter Your Email" type="text" />

                            <input onChange={e => setPass(e.target.value)}
                                required placeholder="Enter Your Password" type="Password" />

                            <button type="submit" onClick={checkValid} className="login-btn" >Log In</button>
                        </form>
                    </div>
                </div>
            </>
            }
        </>

    );
}

export default Login;