import React, { useState } from "react";
import logo from "../images/Logo .svg"

const Nav = () => {
        const [menuOpen, setMenuOpen] = useState(false);
    
        const toggleMenu = () => {
            setMenuOpen(!menuOpen); // Toggle the menuOpen state
        };
    return (
        <nav className={`navbar ${menuOpen ? "open" : ""}`}>
            <a href="/" className="logo">
                <img src={logo} />
            </a>
            {/* Mobile Nabar */}
            <div className="menu-icon" onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
            {/* Navbar Items */}
            <ul className={`nav-links ${menuOpen ? "visible" : ""}`}>
                <li>
                    <a href='/'>Home</a>
                </li>
                <li>
                    <a href='/'>About</a>
                </li>
                <li>
                    <a href='/'>Services</a>
                </li>
                <li>
                    <a href='/'>Resrvation</a>
                </li>
                <li>
                    <a href='/'>Order Online</a>
                </li>
                <li>
                    <a href='/'>Loging</a>
                </li>


            </ul>
        </nav>

    )
        
  
}

export default Nav;