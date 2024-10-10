import React from 'react';
import '../style/CharityCards.css'; 
import PropTypes from 'prop-types';

const Testimonials = ({ testimonials }) => {
  return (
    <div className="testimonial-container">
      <h2 className="title">Team<span className="highlight">.</span></h2>
      <p className="description">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since.
      </p>
      <div className="testimonial-row">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <img className="profile-image" src={testimonial.imageUrl} alt={`Photo of ${testimonial.name}`} />
           <div className='text-container'>
                <h3 className="testimonial-name">{testimonial.name}</h3>
                <p className="testimonial-role">{testimonial.role}</p>
                <ul className='text-container-icon'>
                  <li><i class="bi bi-instagram instagram"></i><a href={testimonial.instagram}></a></li>
                  <li><i class="bi bi-facebook facebook"></i><a href={testimonial.facebook}></a></li>
                </ul>
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
      text: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Testimonials;
