import React, { useState } from 'react';
import '../style/Subscribe.css';

const Subscribe = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            setMessage('Please enter a valid email address.');
            return;
        }

        // Here you would typically handle the subscription logic (e.g., API call)
        setMessage('Thank you for subscribing!');

        // Clear the input field
        setEmail('');
    };

    return (
        <div className="subscribe-container">
            <div className='subscribe-display'>
                <h2 className="subscribe-header">Subscribe To Our Newsletter</h2>
                <p className="subscribe-description">Stay updated with our latest news and announcements.</p>
            </div>
            <div className="parent-container">
                <form className="subscribe-form" onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Enter Email Address"
                        className="subscribe-input"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <button type="submit" className="subscribe-button">SUBSCRIBE NOW</button>
                </form>
                {message && <p className="subscribe-message">{message}</p>}
            </div>
        </div>
    );
};

export default Subscribe;
