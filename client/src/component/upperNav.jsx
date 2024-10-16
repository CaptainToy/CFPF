import React from "react";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';



function UpperNav() {
  const MySwal = withReactContent(Swal);

  const handleCausesClick = () => {
    MySwal.fire({
      title: "Oops...",
      text: "Something went wrong!",
      icon: "error"
    });
  };

    return(
        <div className="headerNav">
        <div className="contact-info">
          <div className="contact-item">
          <span class="material-symbols-outlined span">phone_enabled</span>
            <a href="tel:+2348084009711">+234 808 400 9711</a>
          </div>
          <div className="contact-item">
          <span class="material-symbols-outlined span">mail</span>
            <a href="mailto:celebrityfoodpantry@gmail.com">donation@cfphfoundation.org</a>
          </div>
        </div>
        <div className="login-icons">
          <a href="https://www.instagram.com/cfphfoundation?igsh=MTB0NmF6YjZtNXZ2Nw=="><i class="bi bi-instagram instagram"></i></a>
          <a href="#"><i class="bi bi-facebook facebook"></i></a>
          <a href="https://www.youtube.com/@cfphfoundation/videos"><i className="bi bi-youtube youtube" /></a>
        </div>
        <div className="search-donate">
        <button className="donate-button" onClick={handleCausesClick}>Donate Now</button>
      </div>
      </div>
    )
}

export default UpperNav