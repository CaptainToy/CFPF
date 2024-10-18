import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link, useLocation } from 'react-router-dom';
import '../style/header.css'; 
import Logo from '../assets/logo-removebg-preview (1).png';
import Footer from '../component/footer';

function Sidebar() {
  const [isActive, setIsActive] = useState(false);
  const location = useLocation(); // To get the current path
  const navigate = useNavigate();

  // Toggle active class for menu
  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };

  // Remove active class when an item is clicked
  const removeActive = () => {
    setIsActive(false);
  };

  // Updated toggleBack function
  const toggleBack = () => {
    removeActive(); // Close the sidebar
    navigate('/'); // Navigate to home
  }

  // Function to check if a link should be active
  const isLinkActive = (path) => location.pathname === path ? 'active' : '';

  // Scroll to section
  const scrollToSection = (id) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handle navigation and scrolling
  const handleNavigationAndScroll = (sectionId) => {
    if (location.pathname !== '/') {
      // If not on home, navigate to home first and then scroll
      navigate('/');
      setTimeout(() => scrollToSection(sectionId), 300); // Timeout to wait for the home page to load
    } else {
      // If already on home, just scroll
      scrollToSection(sectionId);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <nav className="navbar-container-content">
          <Link to="/" className="logo">
            <img src={Logo} alt="Logo" />
          </Link>

          <ul className={`navMenu ${isActive ? 'active' : ''}`}>
            <li onClick={removeActive} className='navlink'>
              <Link to="/" className={`navlink ${isLinkActive('/')}`}>Home</Link>
            </li>
            <li onClick={() => handleNavigationAndScroll('#OurPrograms')} className="navlink">
              <a href="#OurPrograms">Our Programs</a>
            </li>
            <li onClick={removeActive}>
              <Link to="/about" className={`navlink ${isLinkActive('/about')}`}>About Us</Link>
            </li>
            <li onClick={removeActive}>
              <Link to="/event" className={`navlink ${isLinkActive('/event')}`}>Events</Link>
            </li>
            <li onClick={() => handleNavigationAndScroll('#SupportSection')} className="navlink">
              <a href="#SupportSection">Get Involved</a>
            </li>
            <li onClick={removeActive}>
              <Link to="/blog" className={`navlink ${isLinkActive('/blog')}`}>Blog</Link>
            </li>
            <li onClick={() => handleNavigationAndScroll('#Testimonials')} className="navlink">
              <a href="#Testimonials">Testimonials</a>
            </li>
            <li onClick={() => handleNavigationAndScroll('#Footer')} className="navlink">
              <a href="#Footer">Contact</a>
            </li>
            <div>
              <span className="material-symbols-outlined hamburger101" onClick={toggleBack}>close</span>
            </div>            
          </ul>

          <button 
            className={`hamburger ${isActive ? 'active' : ''}`}  
            onClick={toggleActiveClass}
            aria-label="Toggle menu"
          ><span class="material-symbols-outlined display-non">menu</span>
          </button>
        </nav>
      </header>
    </div>
  );
}

export default Sidebar;
