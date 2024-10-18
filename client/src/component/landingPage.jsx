import React, { useState, useEffect } from "react";
import'../style/second.css'
import img2 from '../assets/img13.jpg';
import img3 from '../assets/hero2.jpg';
import img4 from '../assets/img1/9.jpg';
import img5 from '../assets/img14.jpg';

// import


const data = [
  {
    img: img5,
    heading: "Celebrity Food Pantry Home Foundation",
    subText: "Food | Life | Hope",
    AboutUs: "About Us"
  },
  {
    img: img2,
    heading: "Empowering Families",
    subText: "We have empowered over 5,000 households by providing food and clothing to the needy, special individuals, elderly and widows",
    AboutUs: "Donate Now"
  },
  {
    img: img3,
    heading: "Food Distribution",
    subText: "We presently distribute food items to needy households including: the elderly, widows, special people, nursing mothers, and vulnerable individuals every two weeks on Thursdays at our office",
    AboutUs: ""
  },
  
];

const LandingPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { img, heading, subText, AboutUs } = data[currentIndex];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 10000); // Change every 5 seconds

    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, []);

  const handleAboutUsClick = () => {
    // Add your navigation logic here
    console.log("About Us Clicked");
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


       <div className="container-space">
          <p>{subText}</p>
          {AboutUs !== "" ? (
            <a href="#" className="about-btn" onClick={handleAboutUsClick}>{AboutUs}</a>
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
