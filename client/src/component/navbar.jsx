import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import '../style/header.css'; 
import Logo from '../assets/logo-removebg-preview (1).png';

const Sidebar = () => {
  const [isNavVisible, setIsNavVisible] = useState(false); 
  const toggleNav = () => {
    setIsNavVisible(prevState => !prevState); 
  };

  return (
    <header className="header">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <nav className={`nav ${isNavVisible ? 'show' : ''}`}>
          <div className="navbar-break" onClick={toggleNav}>
            <span className="material-symbols-outlined close">close</span>
          </div>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/events">Events</Link>
          <Link to="/causes">Causes</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <div className="navbar-break" onClick={toggleNav}>
          <span className="material-symbols-outlined">menu</span>
        </div>
      </header>
  );
};

export default Sidebar;
