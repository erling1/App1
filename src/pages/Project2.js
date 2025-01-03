import React, { useState } from 'react';
import projectImage from '../images/project1.jpg';
import '../CSS/Projects.css';

function Project2() {
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
      <div className="project-header">
        <h1 className="project-title">Raspberry Pi Plant Moisture Monitor</h1>
        <div className="github-button-container">
          <button className="github-button">
            <svg className="github-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
          </button>
          <div className="tooltip">GitHub</div>
        </div>
      </div>

      <div className="project-section">
        <div className="project-overview">
          <p>
            The moisture sensor is for monitoring soil conditions. However, 
            there are currently two issues I need addresse:
          </p>
          <div className="technical-section">
            <ul>
              <li>The solenoid valve's connection points aren't optimal for the current jumper wires(this could be fixed with the soldering device I bought)</li>
              <li>Network connectivity issues with the Raspberry Pi Zero W </li>
            </ul>
          </div>
        </div>

        <div className="development-items">
          <div className="project-content">
            <button onClick={handleImagesClick} className="view-button">
              {showImages ? 'Hide Images' : 'View Project Images'}
            </button>

            <button onClick={handleScriptClick} className="view-button">
              {showScript ? 'Hide Script' : 'View Project Script'}
            </button>

            {showImages && (
              <div className="video-section">
                <img 
                  src={projectImage} 
                  alt="Project 2 Setup" 
                  className="project-image"
                />
              </div>
            )}

            {showScript && (
              <div className="endpoint-section">
                <div className="endpoint">
                  <h3>Project 2 Script</h3>
                  <code>
                    {`// add MicroPython script `}
                  </code>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="future-section">
          <h3>Next Steps</h3>
          <div className="development-item">
            <h4>Upcoming Improvements</h4>
            <ul>
              <li>Optimize solenoid valve connections</li>
              <li>Resolve Wi-Fi connectivity issues</li>
              <li>Implement automated watering system</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project2;