import React, { useState } from 'react';
import '../CSS/Projects.css';

function Project6() {
  const [showVisualization, setShowVisualization] = useState(false);

  const handleVisualizationClick = () => {
    setShowVisualization(!showVisualization);
  };

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
            through an engaging digital experience. This project combines genealogical 
            research with modern web technologies to create a dynamic family tree visualization.
          </p>
        </div>

        <div className="technical-section">
          <h3>Technical Implementation</h3>
          <ul>
            <li>React.js for the frontend interface with interactive components</li>
            <li>D3.js for creating dynamic family tree visualizations</li>
            <li>MongoDB for storing family history data and relationships</li>
            <li>Node.js backend for handling data operations and API endpoints</li>
          </ul>
        </div>

        <div className="development-items">
          <div className="project-content">
            <button onClick={handleVisualizationClick} className="view-button">
              {showVisualization ? 'Hide Visualization' : 'View Family Tree'}
            </button>

            {showVisualization && (
              <div className="video-section">
                {/* Replace with your actual family tree visualization */}
                <div className="project-image">
                  <p>Family Tree Visualization will be displayed here</p>
                  {/* <img src={familyTreeImage} alt="Family Tree Visualization" className="project-image" /> */}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="status-section">
          <h3>Current Features</h3>
          <div className="development-item">
            <h4>Implemented Functionality</h4>
            <ul>
              <li>Interactive family tree visualization with zoom and pan capabilities</li>
              <li>Individual family member profiles with photos and biographical information</li>
              <li>Story collection and preservation system</li>
              <li>Search functionality to find specific family members</li>
            </ul>
          </div>
        </div>

        <div className="future-section">
          <h3>Future Enhancements</h3>
          <div className="development-item">
            <h4>Planned Features</h4>
            <ul>
              <li>Timeline visualization of family events</li>
              <li>Geographic mapping of family migration patterns</li>
              <li>Integration with genealogy databases for automatic updates</li>
              <li>Mobile application for easy family history contributions</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project6;