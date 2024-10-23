import React from "react";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import '../style/style.css';

function UpperNav() {


  return (
    <div className="headerNav">
      <div className="contact-info">
        <div className="contact-item">
          <span className="material-symbols-outlined span">phone_enabled</span>
          <a href="tel:+2348084009711">+234 808 400 9711</a>
        </div>
        <div className="contact-item">
          <span className="material-symbols-outlined span">mail</span>
          <a href="mailto:celebrityfoodpantry@gmail.com">donations@cfphfoundation.org</a>
        </div>
      </div>
      <div className="login-icons">
        <a href="https://www.instagram.com/cfphfoundation?igsh=MTB0NmF6YjZtNXZ2Nw=="><i className="bi bi-instagram instagram"></i></a>
        <a href="#"><i className="bi bi-facebook facebook"></i></a>
        <a href="https://www.youtube.com/@cfphfoundation/videos"><i className="bi bi-youtube youtube" /></a>
      </div>
    </div>
  );
}

export default UpperNav;
