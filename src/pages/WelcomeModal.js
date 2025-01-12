
// WelcomeModal.jsx
import React, { useState, useEffect } from 'react';
import '../CSS/WelcomeModal.css';

const WelcomeModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if user has seen the modal before
    const hasSeenModal = localStorage.getItem('hasSeenWelcomeModal');
    
    if (!hasSeenModal) {
      setIsOpen(true);
      localStorage.setItem('hasSeenWelcomeModal', 'true');
    }
  }, []);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2 className="modal-title">Welcome to my website! 🤠</h2>
        <p className="modal-description">
        This is my website where I post mainly about the projects I am working on, and my journey 
        as I evovle as a coder and learn new cool stuff. Now this website is in of itself one of my long term projects, 
        where the goal is to learn and get better at frontend coding (JavaScript and React). Since this website is constantly progressing,
        there will be some missing or underdevolped features. For more details, the Projects overview gives a description of the progress
        for all my different projects and goals.


        There might also be a bug or two or three along the way too 🤠
        </p>
        

        <button 
          className="modal-button"
          onClick={() => setIsOpen(false)}
        >
          Ok
        </button>
      </div>
    </div>
  );
};

export default WelcomeModal;