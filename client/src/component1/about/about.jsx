import React from "react";
import "./about.css"; 

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="overlay">
        <div className="content-overlay">
          <h1>About</h1>
          <nav>
            <a href="/">Home / About</a>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;