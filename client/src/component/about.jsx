import React from 'react';
import '../style/about.css';
import erro2 from '../assets/hero2.jpg';
import Logo from '../assets/logo-removebg-preview (1).png';

const eventData = [
  {
    date: "25",
    month: "July",
    organizer: "CFHPFoundation",
    time: "Starts 10AM",
    location: "No 20 Olusanya Street, Jesugbami, Aboru, Lagos, Nigeria"
  },
  {
    date: "31",
    month: "August",
    organizer: "CFHPFoundation",
    time: "Starts 10AM",
    location: "No 20 Olusanya Street, Jesugbami, Aboru, Lagos, Nigeria"
  }
];

const About = () => {
  
  return (
    <div className="container">
      <div className='container-text'>
        <h2 className="title">NEWS <span>&</span> <span className="highlight">EVENTS</span></h2>
        <p className="description">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since.
        </p>
      </div>
      <div className='content'>
        <img src={erro2} alt="Smiling children" className="image" />
        
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
                  <p className="event-time"><i class="bi bi-alarm-fill"></i>{event.time}</p>
                  <p className="event-location"><i class="bi bi-geo-alt-fill"></i>{event.location}</p>
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
