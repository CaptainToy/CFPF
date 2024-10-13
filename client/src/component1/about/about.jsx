import React from "react";
import "./about.css"; 

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="overlay">
        <div className="content-overlay">
          <h1>About</h1>
          <p>
            Esse dolorum voluptatum ullam est sint nemo et est ipsa porro
            placeat quibusdam quia assumenda numquam molestias.
          </p>
          <nav>
            <a href="/">Home</a>/<span>About</span>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;