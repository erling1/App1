// Project5.jsx
import React from 'react';
import '../CSS/Projects.css';

function Project5() {

    const githubRepoLinkButton = () => {
        window.open('https://github.com/erling1/Face-Recognition-Face-Tracker','_blank', 'noopener,noreferrer')
    }




    return (
        <div className="project-description">
            <div className="project-section">
                <div className='project-header'>
                <h2 className="project-title">Face Recognition and Tracking System</h2>
                <div className="github-button-container">
                    <button className="github-button" onClick={githubRepoLinkButton}>
                        <svg 
                        strokeLinejoin="round" 
                        strokeLinecap="round" 
                        strokeWidth="2" 
                        stroke="currentColor" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        className="github-icon"
                        >
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                    </button>
                    <span className="tooltip">GitHub</span>
                  </div>
                </div>
                
                <div className="project-overview">
                    <p>
                        Inspired by various facial recognition projects, I wanted to develop 
                        my own face tracking system. Currently, the project successfully streams 
                        video from a Raspberry Pi camera and performs basic face recognition. 
                        This will be the basis for building more advances functionality.
                    </p>
                </div>

                <div className="technical-section">
                    <h3>Current Implementation</h3>
                    <ul>
                        <li>Flask Web Server running on Raspberry Pi 4 Model B</li>
                        <li>Camera feed endpoint (/camera) for real-time video streaming</li>
                        <li>Basic face recognition algorithms processing the video stream from (/camera) endpoint </li>
                        <li>Client-side processing on PC for improved performance, where I am focusing on well known and popular haar cascade for prototyping my code </li>
                    </ul>
                </div>

                <div className="challenges-section">
                    <h3>Technical Architecture</h3>
                    <div className="development-item">
                        <h4>System Flow</h4>
                        <ul>
                            <li>Raspberry Pi hosts Flask server and manages camera feed</li>
                            <li>GET requests from PC fetch real-time video data</li>
                            <li>Facial recognition processing on client side</li>
                            <li>Results streamed to web interface for visualization</li>
                        </ul>
                    </div>
                </div>

                <div className="future-section">
                    <h3>Future Development Phases</h3>
                    <div className="development-items">
                        <div className="development-item">
                            <h4>Phase 1: Enhanced Recognition</h4>
                            <ul>
                                <li>Implement more complex model with additional parameters</li>
                                <li>Improve accuracy and processing speed</li>
                                <li>Add support for multiple face detection</li>
                            </ul>
                        </div>
                        
                        <div className="development-item">
                            <h4>Phase 2: Hardware Integration</h4>
                            <ul>
                                <li>Design and build servo-based mounting system</li>
                                <li>Implement face tracking movement algorithms</li>
                                <li>Create smooth pan-tilt motion controls</li>
                            </ul>
                        </div>

                        <div className="development-item">
                            <h4>Phase 3: Personalized Recognition</h4>
                            <ul>
                                <li>Train model on personal face data</li>
                                <li>Add recognition for specific individuals</li>
                                <li>Implement user-specific tracking behaviors, i.e a haar cascade classifier</li>
                            </ul>
                        </div>

                        <div className="development-item">
                            <h4>Future Expansions</h4>
                            <ul>
                                <li>Expand tracking capabilities to other objects</li>
                                <li>Add custom actions based on recognized individuals</li>
                                <li>Integrate with home automation systems</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project5;