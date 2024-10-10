import React, { useState } from 'react';
import '../style/SupportSection.css';

const SupportSection = () => {
  const [hoverIndex, setHoverIndex] = useState(null);
  const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e, index) => {
    const boxRect = e.target.getBoundingClientRect();
    const x = e.clientX - boxRect.left - boxRect.width / 2;
    const y = e.clientY - boxRect.top - boxRect.height / 2;
    setHoverIndex(index);
    setHoverPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setHoverIndex(null); // Reset the hover index when mouse leaves
    setHoverPosition({ x: 0, y: 0 });
  };

  return (
    <div className='container-text'>
      <h2 className="title">GET <span></span> <span className="highlight">INVOLVED</span></h2>
      <p className="description">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since.
      </p>
      <div className="support-section">
        <div className="left-section">
          <h3>We believe what we achieve</h3>
          <h1>Warmth & True Support For Needed People</h1>
          <div className="video-section">
            <ul>
              <li><strong>Volunteer:</strong>
              Get involved by offering your time and skills to make a meaningful impact in the community. Join us in various volunteer opportunities that align with your interests and expertise.</li>
              <li><strong>Donate:</strong>
              Make a difference by contributing financially to support our initiatives. Every donation, no matter the size, helps us provide essential resources and services to those in need.</li>
              <li><strong>Fundraise:</strong>
              Explore creative ideas and tools to organize successful fundraising events. From online campaigns to community gatherings, we provide the resources and support you need to engage your network and raise vital funds for our cause.</li>
              <li><strong>Sponsorship:</strong>
              Discover exciting opportunities for corporate sponsorships. Partner with us to enhance your brand visibility while making a significant contribution to meaningful projects. Together, we can create lasting change in the community</li>
            </ul>
          </div>
        </div>

        <div className="right-section">
          <div className="grid-box">
            {['orange', 'blue', 'dark-blue', 'red'].map((color, idx) => (
              <div
                key={idx}
                className={`box ${color}`}
                onMouseMove={(e) => handleMouseMove(e, idx)}
                onMouseLeave={handleMouseLeave}
                style={{
                  transform: hoverIndex === idx ? `translate(${hoverPosition.x / 10}px, ${hoverPosition.y / 10}px)` : 'translate(0, 0)',
                  transition: 'transform 0.3s ease',
                }}
              >
                {color === 'orange' && 'Become A Genuine Volunteer'}
                {color === 'blue' && 'Make A Donation To Achieve'}
                {color === 'dark-blue' && 'Sponsorship for Improvement'}
                {color === 'red' && 'Fundraise for Social Improvement.'}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportSection;
