import React from 'react';
import '../style/mission.css';

const Mission = () => {
  return (
    <main id='about'>
      <div className="container-text">
        <h2 className="title-mission">MISSION <span>& </span><span className="highlight">VISION</span></h2>
      </div>
      <div className='svg-container-content'> <svg id="visual" viewBox="0 0 900 600" width="900" height="600" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><g><g transform="translate(275 347)"><path d="M103.1 -34.4C116.1 6.6 97.1 57.1 60.7 83.5C24.3 110 -29.6 112.4 -62 88.2C-94.4 64 -105.4 13.1 -91.5 -29.1C-77.6 -71.3 -38.8 -104.8 3.1 -105.8C45 -106.9 90.1 -75.4 103.1 -34.4Z" stroke="#71f70f" fill="none" stroke-width="20"></path></g><g transform="translate(156 39)"><path d="M37.6 -12.8C42.9 4.1 37.4 24 24.6 33.2C11.8 42.3 -8.3 40.7 -21.8 30.7C-35.4 20.7 -42.4 2.3 -37.7 -13.8C-33 -29.9 -16.5 -43.8 -0.2 -43.7C16.1 -43.7 32.3 -29.7 37.6 -12.8Z" stroke="#71f70f" fill="none" stroke-width="20"></path></g></g></svg></div>
       <div className="school-container">
        <div className="content-section">
          <div className="info-card">
            <span className="material-symbols-outlined iconpi">check</span>
            <div className="info-text">
              <h3>MISSION</h3>
              <p>
                To alleviate hunger and malnutrition in our community by providing food assistance to vulnerable individuals and families.
              </p>
            </div>
          </div>

          <div className="info-card">
            <span className="material-symbols-outlined iconpi">check</span>
            <div className="info-text">
              <h3>VISION</h3> 
              <p>
                A world where everyone has access to nutritious food and a chance to thrive.
              </p>
            </div>
          </div>
        </div>

        <div className="welcome-section">
          <h3>Empowering Change Through Philanthropy</h3>
          <p>
          At Celebrity Food Pantry Home Foundation, we're driven by a passion for giving back. Founded in September 2023 by Mr. Dele Oduyemi and Mrs. Tayo Oduyemi, our organization has been dedicated to supporting the needy, elderly, special people, widows and children in Nigeria.

          </p>
        </div>
      </div>
  
    </main>
    
  );
};

export default Mission;
