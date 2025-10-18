import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/ClearChartAI_Logo_Transparent saturate.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-left">
        <Link to="/" className="logo">
          <img className="logo-img" src={logo} alt="ClearChartAI Logo" />
        </Link>
      </div>
      <div className="nav-center">
        <div className="nav-links-container">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/features">Features</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <div className="nav-right">
        <Link to="/dashboard" className="btn-primary">
          Try For Free
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
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
