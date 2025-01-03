
import '../CSS/Projects.css'; 
import React, { useState } from 'react';
import projectImage from '../images/project1.jpg';
import { FaParagraph } from 'react-icons/fa';
import hljs from 'highlight.js';
import 'highlight.js/styles/default.css';


function Project1() {

    const [showImages, setShowImages] = useState(false);
    const [showScript, setShowScript] = useState(false);

    const handleImagesClick = () => {
        setShowImages(!showImages);
      };
    
      const handleScriptClick = () => {
        setShowScript(!showScript);
      };

    
      return (
        <div className="project-description">
          <div className='project-section'> 
            <div className='project-title'>Simple LED circuit</div>
              <div className="project-overview">

                Create a simple circuit of LEDs using Dupont-wires, a Raspberry Pi Pico, and red LEDs.
                This was super easy and was mostly a project to familiarize myself with the various components amd 
                microcontrollers i would need to use in the future for larger and more advanced projects.

              </div>

              <div className="technical-section">
                <h3>Implementation</h3>
                <ul>
                
                  <li>Design and implementation inspired by various beginner projects</li>
                  <li>Created the script using MicroPython, as this is the only Python language the Pico supports</li>
                </ul>
              </div>

              <div className="status-section">
          <h3>Current Status</h3>
          <p>
            Done. The project went really well, and I am happy with how it turned out. 
              I liked using the Raspberry Pi Pico and the LED setup turned out fine.
          </p>
        </div>

        <div className="future-section">
          <h3>Future Developments</h3>
          <div className="development-items">
            <div className="development-item">
              <h4></h4>
              <ul>
                <li>No further development need</li>
                
              </ul>
            </div>
          </div>
            
        
    
            {/* Button to toggle images */}
            <button onClick={handleImagesClick} className="view-button">
              {showImages ? 'Hide Images' : 'View Project Images'}
            </button>
    
            {/* Container for the image and script */}
            <div className="project-content">
              {/* Image Section */}
              {showImages && (
                <div className="project-image">
                  <img src={projectImage} alt="Project 1 Image" />
                  <p> My girlfriend was also making a mitten</p>
                </div>
              )}
    
              {/* Script Section */}
              Link to github
            
          </div>
          </div>
        </div>
        </div>
      );
  }
  
  export default Project1;
  