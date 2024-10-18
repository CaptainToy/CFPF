import React from "react";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import '../style/style.css';

function UpperNav() {
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
      showCloseButton: true, // Keeps the close button in the top right corner
      showCancelButton: false, // No cancel button
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
    <div className="headerNav">
      <div className="contact-info">
        <div className="contact-item">
          <span className="material-symbols-outlined span">phone_enabled</span>
          <a href="tel:+2348084009711">+234 808 400 9711</a>
        </div>
        <div className="contact-item">
          <span className="material-symbols-outlined span">mail</span>
          <a href="mailto:celebrityfoodpantry@gmail.com">donation@cfphfoundation.org</a>
        </div>
      </div>
      <div className="login-icons">
        <a href="https://www.instagram.com/cfphfoundation?igsh=MTB0NmF6YjZtNXZ2Nw=="><i className="bi bi-instagram instagram"></i></a>
        <a href="#"><i className="bi bi-facebook facebook"></i></a>
        <a href="https://www.youtube.com/@cfphfoundation/videos"><i className="bi bi-youtube youtube" /></a>
      </div>
      <div className="search-donate">
        <button className="donate-button" onClick={handleDonateClick}>Donate Now</button>
      </div>
    </div>
  );
}

export default UpperNav;
