import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import '../style/header.css'; 
import Logo from '../assets/logo-removebg-preview (1).png';

const Sidebar = () => {
  const [isNavVisible, setIsNavVisible] = useState(false); 
  const location = useLocation(); // Get current location to determine active link

  const toggleNav = () => {
    setIsNavVisible(prevState => !prevState); 
  };

  const isActive = (path) => {
    return location.pathname === path ? 'active' : ''; // Check if the current path matches
  };

  const MySwal = withReactContent(Swal);

  const handleCausesClick = () => {
    MySwal.fire({
      title: "The Internet?",
      text: "Something went wrong!",
      icon: "question"
    });
  };

  const handleLinkClick = () => {
    if (window.innerWidth < 768) {
      setIsNavVisible(false); // Close the menu when a link is clicked on mobile
    }
  };

  return (
    <header className="header">
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
      <nav className={`nav ${isNavVisible ? 'show' : ''}`}>
        <Link to="/" className={isActive('/')} onClick={handleLinkClick}>Home</Link>
        <a href="#OurPrograms" onClick={handleLinkClick}>Our Programs</a>
        <Link to="/about" className={isActive('/about')} onClick={handleLinkClick}>About Us</Link>
        <Link to="/event" className={isActive('/event')} onClick={handleLinkClick}>Events</Link>
        <a href="#SupportSection" className={isActive('/causes')}>Get Involved</a> 
        <Link to="/blog" className={isActive('/blog')} onClick={handleLinkClick}>Blog</Link>
        <a href="#Testimonials" onClick={handleLinkClick}>Testimonials</a>
        <a href="#Footer" className={isActive('/contact')} onClick={handleLinkClick}>Contact</a> 
      </nav>
      <div className="navbar-break" onClick={toggleNav} aria-label="Toggle navigation menu">
        <span className="material-symbols-outlined">
          {isNavVisible ? 'close' : 'menu'}
        </span>
      </div>
    </header>
  );
};

export default Sidebar;
