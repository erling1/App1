import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS/DIYProjects.css';

function DIYProjects() {
  const navigate = useNavigate();

  const navigateToProject = (projectNumber) => {
    navigate(`/pages/Project${projectNumber}`);
  };

  return (
    <div className="projects-container">
      <h1>My DIY Projects</h1>

      {/* Project 7: Stortinget */}
      <div className="project">
        <h2>Project 8: Twitter bot</h2>
        <div className="progress-container">
          <div className="progress-text">Project 8: Coming soon</div>
          <button className='DIYbutton' onClick={() => navigateToProject(8)}>
            View Project Details
          </button>
        </div>
        <p>
        I've just started building a Twitter bot that uses a custom NLP model to interpret and generate posts on trending news topics. 
        The bot will scrape data from various news sources, both for training and to create well-informed posts. The goal of this bot 
        I have not yet decided on.
        </p>
      </div>

      {/* Project 7: Stortinget */}
      <div className="project">
        <h2>Project 7: Parliamentary case tracker and vote overview</h2>
        <div className="progress-container">
          <div className="progress-text">Project 7: Ongoing/Refining</div>
          <button className='DIYbutton' onClick={() => navigateToProject(7)}>
            View Project Details
          </button>
        </div>
        <p>
          (Will be posted and featured sometime next week)
        Two search bars integrated with Stortinget's API and a custom database containing five years of parliamentary case data,
         including both ongoing and processed cases. The backend is a server hosting a MongoDB database and a Python-based filtering 
         function, providing an overview of how various representatives voted. 
        </p>
      </div>
      
      {/* Project 6: Family History */}
      <div className="project">
        <h2>Project 6: Family History</h2>
        <div className="progress-container">
          <div className="progress-text">Project 6: Ongoing</div>
          <button className='DIYbutton' onClick={() => navigateToProject(6)}>
            View Project Details
          </button>
        </div>
        <p>
          A large scale project that is going to be ongoing for many years. 
          I thought it would be fun to try and map all the various people in our family tree,
          and a good way to learn how to effectively use JavaScript and React. 
        </p>
      </div>

      {/* Project 5: Facial Recognition */}
      <div className="project">
        <h2>Project 5: Facial Recognition Tracker</h2>
        <div className="progress-container">
          <div className="progress-text">Project 5: Ongoing</div>
          <button className='DIYbutton' onClick={() => navigateToProject(5)}>
            View Project Details
          </button>
        </div>
        <p>
          A computer vision project combining a Raspberry Pi 4 model B for video streaming with 
          PC-based AI processing for facial recognition. This distributed system uses 
          Flask for real-time video transmission and advanced machine learning algorithms 
          for face detection and tracking.
        </p>
      </div>

      {/* Project 4: Chatbot */}
      <div className="project">
        <h2>Project 4: AI Chatbot</h2>
        <div className="progress-container">
          <div className="progress-text">Project 4: Almost Complete!</div>
          <button className='DIYbutton' onClick={() => navigateToProject(4)}>
            View Project Details
          </button>
        </div>
        <p>
          An AI-powered chatbot integrated with OpenAI's API, specifically trained to assist 
          users with website navigation and information. This interactive bot is useful for 
          people visiting my website to get a better overview of various features and relevant info.
        </p>
      </div>

      {/* Project 3: Bus Departure Screen */}
      <div className="project">
        <h2>Project 3: Bus Departure Screen</h2>
        <div className="progress-container">
          <div className="progress-text">Project 3: Complete!</div>
          <button className='DIYbutton' onClick={() => navigateToProject(3)}>
            View Project Details
          </button>
        </div>
        <p>
          A real-time transit information display for Furuset Station using a Raspberry Pi 4 Model B
          and LED screen. This project uses Entur's JourneyPlanner v3 API to provide live bus 
          departure times. The display will be connected to the Raspberry Pi through a parallel interface.
        </p>
      </div>

      {/* Project 2: Raspberry Pi Plant Moisture Monitor */}
      <div className="project">
        <h2>Project 2: Raspberry Pi Plant Moisture Monitor</h2>
        <div className="progress-container">
          <div className="progress-text">Project 2: Complete!</div>
          <button className='DIYbutton' onClick={() => navigateToProject(2)}>
            View Project Details
          </button>
        </div>
        <p>
          An automated plant care system using a Raspberry Pi Pico, a moisture sensor, and a solenoid. 
          The system monitors soil conditions and automatically waters 
          plants when needed, which is practical when I am out of town.
        </p>
      </div>

      {/* Project 1: Raspberry Pi Pico LED Project */}
      <div className="project">
        <h2>Project 1: Raspberry Pi Pico LED Light</h2>
        <div className="progress-container">
          <div className="progress-text">Project 1: Complete!</div>
          <button className='DIYbutton' onClick={() => navigateToProject(1)}>
            View Project Details
          </button>
        </div>
        <p>
          My first project exploring basic electronics with a Raspberry Pi Pico. 
          This simple LED system uses fundamental concepts of GPIO pins, 
          circuit design, and basic MicroPython programming.
        </p>
      </div>
    </div>
  );
}

export default DIYProjects;