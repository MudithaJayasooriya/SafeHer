import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


const Navbar = () => {
    const [links, setLinks] = useState("Home");

    return (
        <nav className="navbar">
            <div className="navbar-logo">
               <Link to="/" onClick={() => setLinks("Home")}>
    <img src="/images/logonew.png" alt="SafeHer Logo" className="logo-img" />
</Link>

            </div>

            <ul className="navbar-links">
                <li onClick={() => setLinks("Home")} className={links === "Home" ? "active" : ""}>
                    <Link to="/">Home</Link>
                </li>
                <li onClick={() => setLinks("Stay_Safe")} className={links === "Stay_Safe" ? "active" : ""}>
                    <Link to="/Stay_Safe">Stay Safe</Link>
                </li>
                <li onClick={() => setLinks("Stories")} className={links === "Stories" ? "active" : ""}>
                    <Link to="/Stories">Stories & Support</Link>
                </li>
                <li onClick={() => setLinks("Help")} className={links === "Help" ? "active" : ""}>
                    <Link to="/Help">Get Help</Link>
                </li>
            </ul>
            <div className="navbar-right">
           
            <Link to="/Log_in">
                    <button className="login-button">Log In</button>
                </Link>
                <Link to="/Sign_up">
                    <button className="signup-button">Sign Up</button>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
