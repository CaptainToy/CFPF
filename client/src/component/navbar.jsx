import React, { useState } from 'react';
import '../style/header.css'; 
import Logo from '../assets/logo-removebg-preview (1).png';

const Sidebar = () => {
  const [isNavVisible, setIsNavVisible] = useState(false); // State to track nav visibility

  const toggleNav = () => {
    setIsNavVisible(prevState => !prevState); // Toggle the visibility
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
        <a href="/">Home</a>
        <a href="/about">About Us</a>
        <a href="/events">Events</a>
        <a href="/causes">Causes</a>
        <a href="/blog">Blog</a>
        <a href="/contact">Contact</a>
      </nav>
      <div className="search-donate">
        <button className="donate-button">Donate Now</button>
      </div>
      <div className="navbar-break" onClick={toggleNav}> 
        <span className="material-symbols-outlined">menu</span>
      </div>
    </header>
  );
};

export default Sidebar;
