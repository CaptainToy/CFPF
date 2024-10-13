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
      {/* <p className="description">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since.
      </p> */}
      <div className="support-section">
        <div className="left-section">
          {/* <h3>How You Can Make a Difference:</h3> */}
          {/* <h1>How You Can Make a Difference</h1> */}
          <div className="video-section">

            <ul>
              <li><strong className='Volunteer'>Become a Volunteer:</strong>
              Offer your time, skills, and passion to uplift communities.</li>
              <ul className='hide'>
                <li><strong>What you can do:</strong>Get involved by offering your expertise in a variety of roles, from community outreach to skill-building programs.</li>
                <li><strong>Impact:</strong>Volunteers are the heartbeat of our mission, directly supporting the people who need it the most.</li>
              </ul>


              <li><strong className='Donate' >Make a Donation:</strong>
              Every contribution helps to create a lasting impact.</li>
              <ul className='hide'>
                <li><strong>Why donate?</strong>Your financial support empowers us to deliver essential resources like food, healthcare, education, and shelter.</li>
                <li><strong>Impact:</strong>No matter the size, your donation creates immediate relief and helps sustain long-term improvement.</li>
              </ul>


              <li><strong className='Fundraise'>Support Fundraising Initiatives:</strong>
              Raise funds to support the causes close to your heart.</li>
              <ul className='hide'>
                <li><strong>How it works:</strong>Collaborate with us to create meaningful fundraising campaigns, whether online or through events. We provide the tools, guidance, and resources to succeed.</li>
                <li><strong>Impact:</strong>Engage your network, raise awareness, and contribute to a future of sustainable change.</li>
              </ul>

              <li><strong className='Sponsorship'>Corporate Sponsorship:</strong>
              Empower communities while enhancing your brand visibility.</li>
              <ul className='hide'>
                <li><strong>Why partner with us?</strong>Sponsoring our initiatives provides corporate organizations the opportunity to make a meaningful impact on society while gaining brand visibility.</li>
                <li><strong>Impact:</strong>Together, we can drive significant, lasting improvements that benefit both the community and your organization.</li>
              </ul>
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
                  transition: 'transform 0.5s ease',
                }}
              >
                {color === 'orange' && 'Join as a Volunteer'}
                {color === 'blue' && 'Donate Now'}
                {color === 'dark-blue' && 'Start a Fundraiser'}
                {color === 'red' && 'Become a Sponsor'}
              </div>
            ))}
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default SupportSection;
