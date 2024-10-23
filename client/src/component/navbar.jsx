import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link, useLocation } from 'react-router-dom';
import '../style/header.css'; 
import Logo from '../assets/logo-removebg-preview (1).png';
import Footer from '../component/footer';
import withReactContent from 'sweetalert2-react-content'; // Import withReactContent
import Swal from 'sweetalert2'; // Import Swal


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
  const MySwal = withReactContent(Swal);

  const handleDonateClick = () => {
    MySwal.fire({
      title: "Donate Now",
      html: `
        <div style="text-align: center;">
          <h3>Celebrity Food Pantry Home Foundation</h3>
          <p><strong>Account Number:</strong> <span id="account-number">6540432917</span>
            <button
              id="copy-button"
              style={{
                marginLeft: '10px',
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                padding: '8px 12px',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease, transform 0.2s ease',
                fontSize: '14px',
                fontWeight: 'bold'
              }}
            >
              Copy
            </button>
          </p>
          <p><strong>Bank:</strong> Monipoint</p>
        </div>
      `,
      showCloseButton: true, 
      showCancelButton: false, 
      willOpen: () => {
        const copyButton = document.getElementById("copy-button");
        const accountNumber = document.getElementById("account-number");

        copyButton.addEventListener('click', () => {
          navigator.clipboard.writeText(accountNumber.textContent).then(() => {
            Swal.fire({
              icon: 'success',
              title: 'Copied!',
              text: 'Account number copied to clipboard.',
              showConfirmButton: false,
              timer: null, 
              customClass: {
                popup: 'animated-modal'
              }
            });
          }).catch(() => {
            Swal.fire('Error', 'Failed to copy!', 'error');
          });
        });
      },
      customClass: {
        popup: 'animated-modal'
      }
    });
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
            {/* <li onClick={() => handleNavigationAndScroll('#SupportSection')} className="navlink">
              <a href="#SupportSection">Get Involved</a>
            </li> */}
            <li onClick={removeActive}>
              <Link to="/blog" className={`navlink ${isLinkActive('/blog')}`}>Blog</Link>
            </li>
            <li onClick={() => handleNavigationAndScroll('#Testimonials')} className="navlink">
              <a href="#Testimonials">Testimonials</a>
            </li>
            <li onClick={() => handleNavigationAndScroll('#Footer')} className="navlink">
              <a href="#Footer">Contact</a>
            </li>
            <li>
            <button className="donate-button" onClick={handleDonateClick}>Donate Now</button>
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
