import React from 'react';
import '../style/footer.css';
import Logo from '../assets/logo-removebg-preview (1).png';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';  
const Footer = () => {
  const navigate = useNavigate();

  const login = () => {
    Swal.fire({
      title: "The Internet?",
      text: "That thing is still around?",
      icon: "question"
    });
  };

  const handleNavigation = (path) => {
    navigate(path); // This will navigate programmatically
  };

  return (
    <footer className="footer" id="Footer">
      <div className="footer-container">
        <div className="footer-section charity-info">
          <div className="icon">
            <img src={Logo} alt="icon" className="icon-image logo-cele" />
            <h2 className="charity-logo">CFPHFoundation</h2>
          </div>
          <p className="charity-text">
            <strong>Food Distribution</strong>
            <p>We presently distribute food items to needy households including: the elderly, widows, special people, nursing mothers, and vulnerable individuals every two weeks on Thursdays at our office.</p>
          </p>
          <p className="charity-text">
            <strong>Community Outreach</strong>
            <p>We are working on partnerships with local organizations, schools, and healthcare providers to extend our services.</p>
          </p>

          <p className="charity-text">
            <strong>
              <button onClick={login}>Admin</button> {/* Trigger SweetAlert on click */}
            </strong>
          </p>
        </div>

        <div className="footer-section contact-info footer-text-container">
          <h3>Contact Info</h3>
          <p><strong>Address</strong>: No 20 Olusanya Street, Jesugbami, Aboru</p>
          <p><strong>Phone</strong>: <a href="tel:+2348084009711">+234 808 400 9711</a></p>
          <p><strong>E-mail</strong>: <a href="mailto:donation@cfphfoundation.org">donations@cfphfoundation.org</a></p>

          <div className="social-links">
            <a href="https://www.instagram.com/cfphfoundation?igsh=MTB0NmF6YjZtNXZ2Nw=="><i className="bi bi-instagram instagram"></i></a>
            <a href="#"><i className="bi bi-facebook facebook"></i></a>
            <a href="https://www.youtube.com/@cfphfoundation/videos"><i className="bi bi-youtube youtube" /></a>
            <a href="#"><i className="bi bi-twitter twitter"></i></a>
          </div>
        </div>

        <div className="footer-section submit-form">
          <h3>Submit Form</h3>
          <form >
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <textarea placeholder="Message"></textarea>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
