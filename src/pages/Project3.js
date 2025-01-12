import React from 'react';
import '../CSS/Projects.css'; 

function Project3() {

    const githubRepoLinkButton = () => {
        window.open('https://github.com/erling1/Ruter_OLED_Display.git','_blank', 'noopener,noreferrer')
    }


    return (
        <div className="project-description">
            <div className="project-section">
                <div className='project-header'>
                <h2 className="project-title">Real-Time Bus Display Project</h2>

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
                
                <div className="video-section">
                    <h3>Project demo</h3>
                    <video controls className="project-video">
                        <source src="/Videos/RuterDisplay.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>

                <div className="project-overview">
                    <p>
                        This project focused on creating a real-time bus schedule display for the 
                        Furuset Skole bus stop. I used Entur's JourneyPlanner v3 API, 
                        the system provides accurate, up-to-the-minute bus arrival information.
                    </p>
                </div>

                <div className="technical-section">
                    <h3>Implementation</h3>
                    <ul>
                        <li>Integration with Entur's JourneyPlanner v3 API</li>
                        <li>Custom data parsing to extract relevant bus timing information</li>
                        <li>LED display implementation using a parallel interface</li>
                    </ul>
                </div>

                <div className="challenges-section">
                    <h3>Challenges & learnings</h3>
                    <ul>
                        <li>Parallel interface was cumbersome to use, used way too many wires</li>
                        <li>Due to the parallel interface, the LED dispaly is limited to a Single-row display</li>
                    </ul>
                </div>

                <div className="future-section">
                    <h3>Future improvements</h3>
                    <div className="development-items">
                        <div className="development-item">
                            <h4>Hardware Upgrades</h4>
                            <ul>
                                <li>Use a I2C interface for cleaner wiring</li>
                                <li>Use both character rows of the LED display</li>
                            </ul>
                        </div>
                        
                        <div className="development-item">
                            <h4>Software improvements</h4>
                            <ul>
                                <li>Refactor code into a reusable class structure, with configurable bus stop selection</li>
                                
                                <li>Add support for multiple bus lines and stops (this was challenging due to the amount of wires you would need in a parallel interface)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project3;
    