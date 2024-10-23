import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../style/second.css';
import img2 from '../assets/img13.jpg';
import img3 from '../assets/hero2.jpg';
import img5 from '../assets/img14.jpg';
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';

// Initialize MySwal
const MySwal = withReactContent(Swal);

// Sample data
const data = [
  {
    img: img5,
    heading: "Celebrity Food Pantry Home Foundation",
    subText: "Food | Life | Hope",
    buttonLabel: "About Us",
  },
  {
    img: img2,
    heading: "Empowering Families",
    subText: "We have empowered over 5,000 households by providing food and clothing to the needy, special individuals, elderly, and widows",
    buttonLabel: "Donate Now",
  },
  {
    img: img3,
    heading: "Food Distribution",
    subText: "We presently distribute food items to needy households including: the elderly, widows, special people, nursing mothers, and vulnerable individuals every two weeks on Thursdays at our office",
    buttonLabel: "",
  },
];

const LandingPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isButtonActive, setIsButtonActive] = useState(true);
  const { img, heading, subText, buttonLabel } = data[currentIndex];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const handleDonateClick = () => {
    MySwal.fire({
      title: "Donate Now",
      html: `
        <div style="text-align: center;">
          <h3>Celebrity Food Pantry Home Foundation</h3>
          <p><strong>Account Number:</strong> <span id="account-number">6540432917</span>
            <button
              id="copy-button"
              style="margin-left: 10px; background-color: #007bff; color: white; border: none; border-radius: 5px; padding: 8px 12px; cursor: pointer;"
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

        if (copyButton) {
          copyButton.addEventListener('click', () => {
            navigator.clipboard.writeText(accountNumber.textContent)
              .then(() => {
                Swal.fire({
                  icon: 'success',
                  title: 'Copied!',
                  text: 'Account number copied to clipboard.',
                  showConfirmButton: false,
                  timer: 1500,
                  customClass: {
                    popup: 'animated-modal'
                  }
                });
              }).catch(() => {
                Swal.fire('Error', 'Failed to copy!', 'error');
              });
          });
        }
      },
      customClass: {
        popup: 'animated-modal'
      }
    });
  };

  return (
    <header className="section__container header__container">
      <div className="svg-container">
        <svg
          id="visual"
          viewBox="0 0 900 600"
          width="900"
          height="600"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          version="1.1"
          preserveAspectRatio="xMidYMid meet"
          className="svg-content-container"
        >
          <g fill="#43a623">
            <circle r="156" cx="281" cy="106"></circle>
            <circle r="117" cx="54" cy="433"></circle>
          </g>
        </svg>
      </div>
      <div className="header__content">
        <h1>{heading}</h1>
        <p>{subText}</p>
        <div className="btn-container">
          {buttonLabel === "Donate Now" ? (
            <div 
              className={`about-btn ${isButtonActive ? '' : 'enable'}`} 
              onClick={handleDonateClick}
            >
              {buttonLabel}
            </div>
          ) : buttonLabel !== "" ? (
            <Link to="/about" className="about-btn" onClick={() => console.log("About Us Clicked")}>
              {buttonLabel}
            </Link>
          ) : null}
        </div>
      </div>
      <div
        className="header__image__container"
        style={{ backgroundImage: `url(${img})` }}
        role="img"
        aria-label={heading}
      ></div>
    </header>
  );
};

export default LandingPage;
