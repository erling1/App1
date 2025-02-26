import '../CSS/Projects.css';
import React from 'react';

function NorwegianParliamentProject() {
  return (
    <div className="project-description">
      <div className="project-section">
        <div className="project-header">
          <h2 className="project-title">Norwegian Parliamentary Cases Database System</h2>
          <div className="github-button-container">
            <button className="github-button">
              <svg className="github-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </button>
            <div className="tooltip">View on GitHub</div>
          </div>
        </div>

        <div className="project-overview">
          <p>
            This project provides a system for searching and analyzing voting data from the Norwegian parliament (Stortinget). 
            Using data retrieved from the official Stortinget API, the application enables users to search parliamentary cases and view 
            voting results. The implementation combines a React frontend with Azure Functions backend, and a Azure MongoDB that stores 5 years of parliamentary cases.
          </p>
        </div>

        <div className="technical-section">
          <h3>Cloud Infrastructure</h3>
          <ul>
            <li>Azure Functions hosted in North Europe region</li>
            <li>Static Web App hosted in West Europe region for the React frontend</li>
            <li>Azure Cosmos DB for MongoDB located in South India region</li>
            <li>Environment variables for secure credential storage</li>
          </ul>
        </div>

        <div className="technical-section">
          <h3>Backend Architecture</h3>
          <p>
            The backend uses Azure Functions to create a serverless
            architecture with two main endpoints:
          </p>
          
          <div className="endpoint-section">
            <div className="endpoint">
              <code>/api/search</code>
              <ul>
                <li>Searches parliamentary cases based on user queries</li>
                <li>Returns structured case data with metadata</li>
                <li>Provides pagination support for large result sets</li>
              </ul>
            </div>

            <div className="endpoint">
              <code>/stemmeresultat</code>
              <ul>
                <li>Retrieves detailed voting results for specific cases</li>
                <li>Formats data </li>
                <li>Integrates with the Stortinget official API</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="technical-section">
          <h3>Database Architecture</h3>
          <ul>
            <li>Azure Cosmos DB with MongoDB API as primary database</li>
            <li>Free tier configuration with single shard deployment</li>
            <li>Secure connection using TLS 1.2+ and SCRAM-SHA-256 authentication</li>
            <li>Optimized connection settings with proper timeout configurations</li>
          </ul>
        </div>

        <div className="technical-section">
          <h3>Data Model</h3>
          <ul>
            <li>Parliamentary Cases Collection storing structured government data</li>
            <li>Case ID used as primary identifier</li>
            <li>Full title and short title (tittel/korttittel) for each case</li>
            <li>The case when clicked on sends the unique case ID to backend which requests information on the various case items and votes that are associated with that case ID using the API. There are several proposal and votes for each case brought up to Stortinget </li>
          </ul>
        </div>

        <div className="technical-section">
          <h3>Data Pre-processing</h3>
          <ul>
            <li>XML parsing system for government data files</li>
            <li>Batch processing capability for multiple session files</li>
            <li>Efficient MongoDB document creation from structured XML</li>
            <li>Multi-file support for different parliamentary sessions (2020-2025)(Could be extended in the future, not really hard to change, I just thought the last 5 years would be enough)</li>
          </ul>
        </div>

        <div className="status-section">
          <h3>Current Status</h3>
          <p>
            The application is functional and deployed to Azure. It successfully connects 
            to the Stortinget API and provides search capabilities for parliamentary cases and 
            voting results. Frontend integration with the backend services is working via 
            fetch API calls to the deployed endpoints at https://stortingetfunctions.azurewebsites.net/. 
          </p>
        </div>

        <div className="future-section">
          <h3>Future Developments</h3>
          <div className="development-items">
            <div className="development-item">
              <h4>Advanced Analytics</h4>
              <ul>
                <li>Implement data visualization for voting patterns</li>
                <li>Create analytical dashboards for party voting trends</li>
                <li>Develop historical comparison features</li>
              </ul>
            </div>
            
            <div className="development-item">
              <h4>User Experience Enhancements</h4>
              <ul>
                <li>Improve search functionality with filters and sorting options</li>
                <li>Add responsive design improvements for mobile devices</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NorwegianParliamentProject;