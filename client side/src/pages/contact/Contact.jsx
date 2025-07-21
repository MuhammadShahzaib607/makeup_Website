import React from 'react';
import './contact.scss';

const Contact = () => {
  return (
    <div className="contactPage">
      <div className="contactForm">
        <h1>Contact Us</h1>
        <div className='form'>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="text" placeholder="Subject" />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </div>
      </div>

      <div className="contactInfo">
        <h2>Get in Touch</h2>
        <p><strong>Email:</strong> support@cosmetics.com</p>
        <p><strong>Phone:</strong> +92 300 1234567</p>
        <p><strong>Address:</strong> Saddar, Karachi, Pakistan</p>
      </div>
    </div>
  );
};

export default Contact;
