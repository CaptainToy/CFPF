import React from 'react';
import '../style/mission.css';

const Mission = () => {
  return (
    <main>
      <div className="container-text">
        <h2 className="title">MISSION <span>& </span><span className="highlight">VISION</span></h2>
        <p className="description">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry and has been the industry's standard dummy text ever since.
        </p>
      </div>
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
              <h3>VISION</h3> {/* Corrected spelling */}
              <p>
                A world where everyone has access to nutritious food and a chance to thrive.
              </p>
            </div>
          </div>
        </div>

        <div className="welcome-section">
          <h3>Our Story</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, iure eum laboriosam harum consequatur velit dicta natus, sed vitae eligendi consequuntur odio obcaecati eos, dolorem cumque voluptate magni dolor. Sint.
          </p>
        </div>
      </div>
      <div class="custom-shape-divider-bottom-1728500168">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
</div>
    </main>
    
  );
};

export default Mission;
