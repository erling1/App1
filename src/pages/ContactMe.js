import React from 'react';
import '../CSS/ContactMe.css'; 

function ContactMe() {
  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <div className="contact-info">
        <p><strong>Name:</strong> John Doe</p> {/* Replace with your name */}
        <p><strong>Email:</strong> <a href="mailto:john.doe@example.com">john.doe@example.com</a></p> {/* Replace with your email */}
        <p><strong>Phone:</strong> +123 456 7890</p> {/* Optional, replace with your phone number */}
        <p><strong>Location:</strong> City, Country</p> {/* Optional */}
      </div>

      <div className="social-links">
        <h2>Find me on:</h2>
        <ul>
          <li><a href="https://www.linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          <li><a href="https://twitter.com/johndoe" target="_blank" rel="noopener noreferrer">Twitter</a></li>
        </ul>
      </div>

      
      <div className="contact-form">
        <h2>Send me a Message</h2>
        <form action="mailto:john.doe@example.com" method="post" enctype="text/plain">
          <label htmlFor="name">Your Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Your Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Your Message:</label>
          <textarea id="message" name="message" required></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
