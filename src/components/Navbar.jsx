import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/ClearChartAI color.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <img src={logo} alt="ClearChartAI" width="40" height="40" />
      </Link>
      <Link to="/" className="logo-center">
        ClearChartAI
      </Link>
      <div className="nav-right">
        <button className="btn-primary">Try For Free</button>
        <button className={`menu-btn ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
        <Link to="/" className="mobile-menu-item" onClick={closeMenu}>Home</Link>
        <Link to="/about" className="mobile-menu-item" onClick={closeMenu}>About</Link>
        <Link to="/features" className="mobile-menu-item" onClick={closeMenu}>Features</Link>
        <Link to="/blog" className="mobile-menu-item" onClick={closeMenu}>Blog</Link>
        <Link to="/contact" className="mobile-menu-item" onClick={closeMenu}>Contact</Link>
      </div>

      {isMenuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}
    </nav>
  );
};

export default Navbar;
