import React, { useState } from 'react';
import '../style/Testimonials.css';

const Testimonials = () => {
  // List of sample testimonials with custom ratings
  const sampleTestimonials = [
    {
      text: "CFPH Foundation has helped me and my family during tough times. Thank you!”",
      author: "Beneficiary",
      rating: 3, 
    },
    {
      text: "“Volunteering here has been an amazing experience..”",
      author: "Volunteer",
      rating: 4, 
    },
    
  ];

  // State to track the current testimonial index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle right arrow click
  const handleNextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % sampleTestimonials.length);
  };

  // Function to handle left arrow click
  const handlePreviousTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? sampleTestimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="testimonialsSection">
         <h2 className="title">Clients <span className="highlight">Testimonials</span></h2>
      <p className="description">
      Discover why clients love Celebrity Food Pantry Home Foundation! Read testimonials about their experiences and how our services have made a positive impact on their lives.</p>
      {/* Displaying the current testimonial */}
      <div className="testimonialCard">
        <p className="testimonialText">
          {sampleTestimonials[currentIndex].text}
        </p>
        <p className="testimonialAuthor">{sampleTestimonials[currentIndex].author}</p>
        <div className="testimonialStars">
          {/* Render stars based on rating */}
          {Array.from({ length: 5 }, (_, i) => (
            <span key={i}>
              {i < sampleTestimonials[currentIndex].rating ? (
                <i class="bi bi-star-fill"></i>
              ) : (
                <i class="bi bi-star"></i>
              )}
            </span>
          ))}
        </div>
      </div>

      <div className="testimonialArrows">
        <button className="arrowLeft" onClick={handlePreviousTestimonial}><span class="material-symbols-outlined">arrow_back</span></button>
        <button className="arrowRight" onClick={handleNextTestimonial}><span class="material-symbols-outlined">arrow_forward</span></button>
      </div>
    </div>
  );
};

export default Testimonials;
