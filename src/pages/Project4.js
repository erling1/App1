
import '../CSS/Projects.css'; 
import React from 'react';



function Project4() {
    
      

    
      return (
        <div className="project-description">
      <div className="project-section">
        <h2 className="project-title">Building a React Chatbot with Python Backend</h2>
        
        <div className="project-overview">
          <p>
            This project has been my most challenging yet, and I have gotten lots of valuable experiances on how to combine Python and JSX. The implementation combines 
            a React frontend with a Python backend, creating a functional 
            and responsive chatbot.
          </p>
        </div>

        <div className="technical-section">
          <h3>Frontend Implementation</h3>
          <ul>
            <li>Built using JSX and React</li>
            <li>Design and implementation inspired by Medium articles on how to develop a chatbot</li>
          </ul>
        </div>

        <div className="technical-section">
          <h3>Backend Structure</h3>
          <p>
            The backend is Python, using FastAPI to create a  
            server architecture with two endpoints:
          </p>
          
          <div className="endpoint-section">
            <div className="endpoint">
              <code>/chats</code>
              <ul>
                <li>Creates unique chatID identifiers</li>
                <li>Maintains distinct chat histories for each session</li>
              </ul>
            </div>

            <div className="endpoint">
              <code>/chats/chatID</code>
              <ul>
                <li>Handles communication with OpenAI API</li>
                <li>Processes user input and manages responses</li>
                <li>Integrates with GPT-3.5-turbo model</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="status-section">
          <h3>Current Status</h3>
          <p>
            The chatbot functions really well when the server is active, 
            though there are some minor refinements that are still needed.
          </p>
        </div>

        <div className="future-section">
          <h3>Future Developments</h3>
          <div className="development-items">
            <div className="development-item">
              <h4>Azure Deployment</h4>
              <ul>
                <li>Consistent availability</li>
                <li>Eliminate manual server maintenance</li>
              </ul>
            </div>
            
            <div className="development-item">
              <h4>Prompt Engineering</h4>
              <ul>
                <li>Get my chatbot to actually respond to relevent questions about my website</li>
                <li>Fix various frontend limitations (scroll effect is bugged for long chat histories)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

      );
  }
  
  export default Project4;
  