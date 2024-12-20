import React, { useState } from 'react'; 
import { useNavigate, Link, useLocation } from 'react-router-dom';
import '../style/header.css';
import Logo from '../assets/logo-removebg-preview (1).png';
import chrismas from '../assets/ch.png'
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';

function Sidebar() {
  const [isActive, setIsActive] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };

  const handleNavigation = (path, sectionId) => {
    navigate(path);
    if (sectionId) {
      setTimeout(() => scrollToSection(sectionId), 300);
    }
    setIsActive(false); // Close the sidebar
  };

  const isLinkActive = (path) => (location.pathname === path ? 'active' : '');

  const scrollToSection = (id) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const MySwal = withReactContent(Swal);

  const handleDonateClick = () => {
    MySwal.fire({
      title: "Donate Now",
      html: `
        <div style="text-align: center; max-width: 100%; overflow: auto;">
          <h3>Celebrity Food Pantry Home Foundation</h3>
          <p>
            <strong>Select a Donation Method:</strong>
            <div>
              <button
                id="bank-transfer-button"
                style="margin: 5px; background-color: #28a745; color: white; border: none; border-radius: 5px; padding: 8px 12px; cursor: pointer;"
              >
                Bank Transfer
              </button>
              
            </div>
          </p>
          <div id="bank-transfer-info" style="display: none; text-align: left;">
            <p><strong>Bank:</strong> Moniepoint</p>
          </div>
          <a
            id="gofundme-link"
            href="https://gofund.me/373bf726"
            target="_blank"
            style="display: none; padding: 10px 20px; background-color: #00aaff; color: white; border-radius: 5px; text-decoration: none; height: 40px; line-height: 40px; display: inline-flex; align-items: center; justify-content: center; white-space: nowrap;"
          >
            GoFundMe Donation Page
          </a>
        </div>
      `,
      showCloseButton: true,
      willOpen: () => {
        const bankTransferButton = document.getElementById("bank-transfer-button");
        const gofundmeButton = document.getElementById("gofundme-button");
        const bankTransferInfo = document.getElementById("bank-transfer-info");
        const gofundmeLink = document.getElementById("gofundme-link");

        // Handle Bank Transfer Button Click
        bankTransferButton?.addEventListener('click', () => {
          bankTransferInfo.style.display = 'block';
          gofundmeLink.style.display = 'none';
          // Open new modal to show account number
          MySwal.fire({
            title: "Bank Transfer Account Number",
            html: `
              <div style="text-align: center;">
                <p><strong>Account Number:</strong> 6540432917</p>
                <button
                  id="copy-button"
                  style="background-color: #007bff; color: white; border: none; border-radius: 5px; padding: 8px 12px; cursor: pointer;"
                >
                  Copy
                </button>
              </div>
            `,
            showCloseButton: true,
            didOpen: () => {
              const copyButton = document.getElementById("copy-button");
              const accountNumber = "6540432917";

              // Handle Copy Button Click (for Bank Transfer)
              copyButton?.addEventListener('click', () => {
                navigator.clipboard.writeText(accountNumber).then(() => {
                  Swal.fire({
                    icon: 'success',
                    title: 'Copied!',
                    text: 'Account number copied to clipboard.',
                    showConfirmButton: false,
                    timer: 1500,
                  });
                }).catch(() => Swal.fire('Error', 'Failed to copy!', 'error'));
              });
            }
          });
        });

        // Handle GoFundMe Button Click
        gofundmeButton?.addEventListener('click', () => {
          // Display the GoFundMe link modal
          MySwal.fire({
            title: "Donate via GoFundMe",
            html: `
              <div style="text-align: center; max-width: 100%; overflow: auto;">
                <p>Click the link below to donate via GoFundMe:</p>
                <a
                  href="https://gofund.me/373bf726"
                  target="_blank"
                  style="padding: 10px 20px; background-color: #00aaff; color: white; border-radius: 5px; text-decoration: none; height: 40px; line-height: 40px; display: inline-flex; align-items: center; justify-content: center; white-space: nowrap;"
                >
                  GoFundMe Donation Page
                </a>
              </div>
            `,
            showCloseButton: true
          });
        });
      },
      didClose: () => {
        // Show error if neither option is selected
        if (!document.getElementById("bank-transfer-info").style.display && !document.getElementById("gofundme-link").style.display) {
          Swal.fire('Error', 'Please select a donation method!', 'error');
        }
      }
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <nav className="navbar-container-content">
          <Link to="/" className="logo">
            <img src={chrismas} alt="Logo" />
          </Link>
          <ul className={`navMenu ${isActive ? 'active' : ''}`}>
            <li>
              <Link to="/" className={`navlink ${isLinkActive('/')}`} onClick={() => handleNavigation('/')}>Home</Link>
            </li>
            <li>
              <a href="#OurPrograms" className={`navlink ${isLinkActive('#OurPrograms')}`} onClick={() => handleNavigation('/', '#OurPrograms')}>Our Programs</a>
            </li>
            <li>
              <Link to="/about" className={`navlink ${isLinkActive('/about')}`} onClick={() => handleNavigation('/about')}>About Us</Link>
            </li>
            <li>
              <Link to="/event" className={`navlink ${isLinkActive('/event')}`} onClick={() => handleNavigation('/event')}>Events</Link>
            </li>
            <li>
              <Link to="/blog" className={`navlink ${isLinkActive('/blog')}`} onClick={() => handleNavigation('/blog')}>Blog</Link>
            </li>
            <li>
              <a href="#Testimonials" className={`navlink ${isLinkActive('#Testimonials')}`} onClick={() => handleNavigation('/', '#Testimonials')}>Testimonials</a>
            </li>
            <li>
              <a href="#Footer" className={`navlink ${isLinkActive('#Footer')}`} onClick={() => handleNavigation('/', '#Footer')}>Contact</a>
            </li>
            <li>
              <button className="donate-button" onClick={handleDonateClick}>Donate Now</button>
            </li>
            <div>
              <span className="material-symbols-outlined hamburger101" onClick={() => setIsActive(false)}>close</span>
            </div>
          </ul>
          <button 
            className={`hamburger ${isActive ? 'active' : ''}`}  
            onClick={toggleActiveClass}
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined display-non">menu</span>
          </button>
        </nav>
      </header>
    </div>
  );
}

export default Sidebar;
