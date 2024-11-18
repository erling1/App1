import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../CSS/Homepage.css';


function HomePage(){

    const navigate = useNavigate();

    const handleFamiliyHistoryButtonClick = () => {
        const password = prompt("Please enter the password to access Family History");
        const correctPassword = 'erling123'

        if(password == correctPassword){
            navigate('pages/FamiliyHistory')
        } else {
            alert("Incorrect password. Please try again.")
        }

    }


    
    return <div className="home-container">
    <h1>Welcome to the Home Page</h1>
    <div>
      <Link to="/pages/DIYProjects">DIY Projects</Link>
    </div>
    <div>
      <Link to="/pages/CV">CV</Link>
    </div>
    <div>
      <Link to="/pages/WorkExperiance">Work Experience</Link>
    </div>
    <div>
      <button onClick={handleFamiliyHistoryButtonClick}>Family History</button>
    </div>
  </div>
}

export default HomePage;