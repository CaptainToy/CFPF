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
        <div style="text-align: center; max-width: 100%; overflow: auto;">
          <h3>Celebrity Food Pantry Home Foundation</h3>
          <p>
            <strong>Select a Donation Method:</strong>
            <div>
              <button
                id="bank-transfer-button"
                style="margin: 10px; background-color: #28a745; color: white; border: none; border-radius: 5px; padding: 8px 12px; cursor: pointer;"
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
    <header className="section__container header__container">
      <div className="svg-container">
        <svg
          viewBox="0 0 900 600"
          width="900"
          height="600"
          xmlns="http://www.w3.org/2000/svg"
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
        <p className="centered-text">{subText}</p>
        <div className="btn-container">
          {buttonLabel === "Donate Now" ? (
            <button className="about-btn" onClick={handleDonateClick}>
              {buttonLabel}
            </button>
          ) : buttonLabel && (
            <Link to="/about" className="about-btn">
              {buttonLabel}
            </Link>
          )}
        </div>
      </div>

      <div className="header__image__container" aria-label={heading}>
        <div id="frame">
          <div id="border">
            <img src={img} alt={heading} className="container-img-content" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default LandingPage;
