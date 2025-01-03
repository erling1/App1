import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import '../CSS/ContactMe.css'; 

function ContactMe() {

console.log("service-id",process.env.REACT_APP_EMAILJS_SERVICE_ID)

const [message, setMessage] = useState('')
const [name, setName] = useState('')
const [mail, setMail] = useState('')

const handleNameChange = (e) => {
  setName(e.target.value)
}


const handleInput = (e) => {
  setMessage(e.target.value)
}

const handleEmailChange = (e) => {
  setMail(e.target.value)
}

const Submit = (e) => {

  e.preventDefault()


  const templateParams = {
    to_name: 'Erling',
    message: message,
    from_name: name,
    from_email: mail
  };

  // Send the email
  emailjs
    .send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      templateParams,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY    
    )
    .then((response) => {
      console.log('Email sent successfully!', response.status, response.text);
      alert('Message sent successfully!');
    })
    .catch((err) => {
      console.error('Failed to send email.', err);
      alert('Failed to send message.');
    });

    setMessage('')
    setName('')
    setMail('')

}

  return (
    <div className="contact-container">
      <h1>Contact Me</h1>

      <div className="social-links">
        <ul>
          <li><a href="http://www.linkedin.com/in/erlingnupen" target="_blank" rel="noopener noreferrer"><FaLinkedin /> LinkedIn</a></li>
          <li><a href="https://www.github.com/erling1" target="_blank" rel="noopener noreferrer"><FaGithub /> GitHub</a></li>
          <li><a href="https://instagram.com/erlingnuppen" target="_blank" rel="noopener noreferrer"><FaInstagram /> Instagram</a></li>
        </ul>
      </div>

      <div className="contact-form">
        <h2>Send me a Message</h2>
        <form>
          <label htmlFor="name">Your Name:</label>
          <input type="text" id="name" name="name" value={name} onChange={handleNameChange} required />

          <label htmlFor="email">Your Email:</label>
          <input type="email" id="email" name="email" value={mail} onChange={handleEmailChange} required />

          <label htmlFor="message">Your Message:</label>
          <textarea id="message" name="message" value={message} onChange={handleInput} required></textarea>

          <button type="submit" on onClick={Submit} > Send Message </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
