import React from 'react';
import '../CSS/Projects.css';

function Project6() {
  
  return (
    <div className="project-description">
      <div className="project-header">
        <h1 className="project-title">Interactive Family History Explorer</h1>
        <div className="github-button-container">
          <button className="github-button" onClick={() => window.open('YOUR_GITHUB_URL', '_blank')}>
            <svg className="github-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
          </button>
          <div className="tooltip">View on GitHub</div>
        </div>
      </div>

      <div className="project-section">
        <div className="project-overview">
          <p>
            An interactive web application that visualizes and preserves family history 
          </p>
        </div>

        <div className="technical-section">
          <h3>Technical implementation</h3>
          <ul>
            <li>React for the frontend interface with interactive components</li>

          </ul>
        </div>

        <div className="status-section">
          <h3>Current features</h3>
          <div className="development-item">
            <h4>Implemented Functionality</h4>
            <ul>
              <li>Individual family member profiles with photos and some biographical information</li>
            
            </ul>
          </div>
        </div>

        <div className="future-section">
          <h3>Future goals</h3>
          <div className="development-item">
            <h4>Planned Features</h4>
            <ul>
              <li>Search functionality to find specific family members</li>
              <li>Create a MongoDB database for storing family history data and relationships</li>
              
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project6;