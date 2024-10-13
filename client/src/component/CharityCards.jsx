import React from 'react';
import PropTypes from 'prop-types';
import '../style/CharityCards.css';

const Testimonials = ({ testimonials }) => {
  return (
    <div className="testimonial-container">
      <h2 className="title">Team<span className="highlight">.</span></h2>
      <p className="description">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since.
      </p>
      <div className="home-container">
        {testimonials.map((testimonial, index) => (
          <div className="profile-card" key={index}>
            <div className="img-wrapper">
              <img src={testimonial.imageUrl} alt={testimonial.name} />
            </div>
            <div className="caption">
              <h3 className="name">{testimonial.name}</h3>
              <p className="role">{testimonial.role}</p>
              <div className="social-links">
                  <a href="#" className="social-icon"><i class="bi bi-instagram instagram"></i></a>
                  <a href="#" className="social-icon"><i class="bi bi-facebook facebook"></i></a>
                  <a href="#" className="social-icon"><i className="bi bi-youtube youtube" /></a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

Testimonials.propTypes = {
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Testimonials;

