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

  return (
    <header className="header">
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
      <nav className={`nav ${isNavVisible ? 'show' : ''}`}>
        <Link to="/" className={isActive('/')}>Home</Link>
        <a href="#OurPrograms">Our Programs</a>
        <Link to="/about" className={isActive('/about')}>About Us</Link>
        <Link to="/event" className={isActive('/event')}>Events</Link>
        <a href="#SupportSection"  className={isActive('/causes')}>Get Involved</a> 
        <Link to="/blog" className={isActive('/blog')}>Blog</Link>
        <a href="#Testimonials">Testimonials</a>
        {/* <Link to="#" className={isActive('/Testimonials')}>Testimonials</Link> */}
        <a href="#Footer"  className={isActive('/contact')}>Contact</a> 
      </nav>
      <div className="navbar-break" onClick={toggleNav}>
        <span className="material-symbols-outlined">
          {isNavVisible ? 'close' : 'menu'}
        </span>
      </div>
    </header>
  );
};

export default Sidebar;
