

import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import './Navbar.css';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar">
      <div className="navbar-left">
        <div className="navbar-burger" onClick={toggleMenu}>
          <div className={`burger-line ${isOpen ? 'open' : ''}`}></div>
          <div className={`burger-line ${isOpen ? 'open' : ''}`}></div>
          <div className={`burger-line ${isOpen ? 'open' : ''}`}></div>
        </div>
        <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
          
          <Link to={'/'} className="navbar-link">Home</Link>
          <Link to={'/properties'} className="navbar-link">Properties</Link>
          <Link to={'/'} className="navbar-link">About</Link>
          <Link to={'/'} className="navbar-link">Blog</Link>
        </div>
      </div>
      <div className="navbar-center">
        <span className="navbar-title">Aman Sidhu</span>
      </div>
      <div className="navbar-right">
        <a href="#contact" className="navbar-link">Contact Us</a>
        <a href="#valuation" className="navbar-link">Home Valuation</a>
        <a href="tel:+12067410340" className="navbar-phone">+1 206-741-0340</a>
      </div>
    </div>
  );
};

export default NavBar;

