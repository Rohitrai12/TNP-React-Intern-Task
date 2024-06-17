import React, { useState } from "react";
import "../../src/Navbar.css";
import Logo from '../assets/logo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={Logo} alt="logo" className="logo"/>
      </div>
      <div className={`navbar-links ${isOpen ? "open" : ""}`}>
        <a href="#home">Home</a>
        <a href="#internships">Internships</a>
        <a href="#mock-tests">Mock Tests</a>
        <a href="#learning">Learning</a>
        <a href="#about">About</a>
      </div>
      <button className="navbar-button">Get Started</button>
      <div className="navbar-toggle" onClick={toggleMenu}>
        ☰
      </div>
    </nav>
  );
};

export default Navbar;
