import React from "react";
import "./about.css"; 

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="overlay">
        <div className="content-overlay">
          <h1>Blog</h1>
          <nav>
            <a href="/">Home / Blog</a>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;