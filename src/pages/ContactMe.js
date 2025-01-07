import React, { useState } from 'react';
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
      <h1>Contact me</h1>

            <div class="card-contactme">
            <a href="https://www.instagram.com/erlingnuppen" class="socialContainer containerOne" target="_blank" rel="noopener noreferrer">
                <svg class="socialSvg instagramSvg" viewBox="0 0 16 16"> <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path> </svg>
              </a>
              
            
                
                <a href="https://www.linkedin.com/in/erlingnupen" class="socialContainer containerThree" target="_blank" rel="noopener noreferrer">
                <svg class="socialSvg linkdinSvg" viewBox="0 0 448 512"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>
              </a>


              <div className="contact-info-container">
  <div className="info-display">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2"/>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
    </svg>
    <span className="info-text">erling.nupen@gmail.com</span>
  </div>
  
  <div className="info-display">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
    <span className="info-text">+47 41 26 96 03</span>
  </div>
</div>
              
            </div>
      

      <div className="contact-form">
        <h2>Send me a message</h2>
        <form>
          <label htmlFor="name">Your name:</label>
          <input type="text" id="name" name="name" value={name} onChange={handleNameChange} required />

          <label htmlFor="email">Your email:</label>
          <input type="email" id="email" name="email" value={mail} onChange={handleEmailChange} required />

          <label htmlFor="message">Your message:</label>
          <textarea id="message" name="message" value={message} onChange={handleInput} required></textarea>

          <button type="submit" on onClick={Submit} > Send Message </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
