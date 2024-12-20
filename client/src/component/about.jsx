import React, { useState, useEffect } from 'react';
import '../style/about.css';
import erro2 from '../assets/hero2.jpg'; 
import Logo from '../assets/logo-removebg-preview (1).png';
import img8 from '../assets/img1/8.jpg'; 
import img22 from '../assets/img1/22.jpg';
import img21 from '../assets/img1/21.jpg';

const About = () => {
  const [slideIndex, setSlideIndex] = useState(0); 
  const images = [
    { src: img8, alt: 'Event Image 1' }, 
    { src: erro2, alt: 'Event Image 2' },
    { src: img22, alt: 'Event Image 3' },
    { src: img21, alt: 'Event Image 4' },
  ];

  // Function to get the ordinal suffix for the date
  function getOrdinalSuffix(day) {
    if (day > 3 && day < 21) return 'th'; // Covers 11th to 19th
    switch (day % 10) {
      case 1: return 'st';
      case 2: return 'nd';
      case 3: return 'rd';
      default: return 'th';
    }
  }

  // Format the date as DD MMM with ordinal suffix
  function formatEventDate(date) {
    const day = date.getDate();
    const month = date.toLocaleDateString('en-US', { month: 'short' }).toUpperCase();
    const suffix = getOrdinalSuffix(day);
    return `${day}${suffix} ${month}`;
  }

  // Manually set event dates to 12th and 26th of December, 2024
  const eventData = [
    {
      date: formatEventDate(new Date(2024, 11, 12)).split(' ')[0],  // 12th December
      month: formatEventDate(new Date(2024, 11, 12)).split(' ')[1],
      organizer: "CFPHFoundation",
      time: "Starts 10AM",
      location: "No 23 Olusanya Street, Jesugbami, Aboru, Lagos, Nigeria"
    },
    {
      date: formatEventDate(new Date(2024, 11, 24)).split(' ')[0],  // 26th December
      month: formatEventDate(new Date(2024, 11, 24)).split(' ')[1],
      organizer: "CFPHFoundation",
      time: "Starts 10AM",
      location: "No 23 Olusanya Street, Jesugbami, Aboru, Lagos, Nigeria"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [images.length]);

  return (
    <div className="container" id='OurPrograms'>
      <div className='container-text'>
        <h2 className="title">NEWS <span>&</span> <span className="highlight">EVENTS</span></h2>
      </div>
      <div className='content'>
        {images.map((image, index) => (
          <img 
            key={index} 
            src={image.src} 
            alt={image.alt} 
            className="mySlides image" 
            style={{ display: index === slideIndex ? 'block' : 'none' }} 
          />
        ))}
        
        <div className="text-section">
          <div className="icon">
            <img src={Logo} alt="icon" className="icon-image" />
            <h2>We believe what we achieve</h2>
          </div>
          <h1>Join Our Events</h1>
          
          <div className='event-card-container'>
            {eventData.map((event, index) => (
              <div className="event-card" key={index}>
                <h3 className="event-date">{event.date} <span>{event.month}</span></h3>
                <p className="event-organizer">Organized By: <span className="organizer-name">{event.organizer}</span></p>
                <div className="event-footer">
                  <p className="event-time"><i className="bi bi-alarm-fill"></i>{event.time}</p>
                  <p className="event-location"><i className="bi bi-geo-alt-fill"></i>{event.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
