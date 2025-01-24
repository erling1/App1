
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
        
        This is my website, where I mostly share updates on the projects I’m working on and document 
        my journey as I get better at coding and explore new projects. The website itself is one of 
        my long-term projects, with the goal of improving my frontend development skills, particularly in JavaScript and React.

        Since this site is a work in progress, you may encounter some missing or underdeveloped features. For a more detailed overview, 
        the Projects Overview section provides insights into the progress and goals of all my various projects.

        You might also come across a bug—or maybe two or three—along the way 🤠.
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