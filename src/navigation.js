import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CSS/Navbar.css'; 
//import WorkExperiance from './pages/WorkExperiance';

export function Navbar() {
  const navigate = useNavigate();

  const [isChecked, setIsChecked] = useState(false);

  const toggleMenu = () => {
    setIsChecked(!isChecked);
  };

  const homeButton = () => {
    navigate("/");
  };

  const aboutmeButton = () => {
    navigate("/pages/AboutMe");
  };

  const contactmeButton = () => {
    navigate("/pages/ContactMe");
  };

  const FamilyHistoryButton = () => {
    navigate("/pages/FamiliyHistory");
  };


  const DIYButton = () => {
    navigate("/pages/DIYProjects");
  };

  const CVButton = () => {
    navigate("/pages/CV");
  };

  const PoliticsButton = () => {
    navigate("/pages/Politics");
  };

  
  return (
    <nav className="navbar-links">

      <div className="main-content">
        {/* Home Icon */}
        <button href="#" className="tab" onClick={homeButton}>
          <svg
            className="svgIcon"
            viewBox="0 0 104 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100.5 40.75V96.5H66V68.5V65H62.5H43H39.5V68.5V96.5H3.5V40.75L52 4.375L100.5 40.75Z"
              stroke="black"
              strokeWidth="7"
            ></path>
          </svg>
        </button>

        {/* Desktop Navigation Buttons */}
        <div className="desktop-nav">
          <button className="cta" onClick={DIYButton}>
            <span className="hover-underline-animation">Projects</span>
          </button>

          <button className="cta" onClick={CVButton}>
            <span className="hover-underline-animation">CV</span>
          </button>

        </div>

        {/* Hamburger Menu */}
        <div className="menu-container">
          <label className="bar" htmlFor="check">
            <input
              type="checkbox"
              id="check"
              checked={isChecked}
              onChange={toggleMenu}
            />
            <span className="top"></span>
            <span className="middle"></span>
            <span className="bottom"></span>
          </label>

          <div className={`dropdown-menu ${isChecked ? 'active' : ''}`}>
            <div className="menu-items">
              <a href="#about" onClick={aboutmeButton}>About Me</a>
              <a href="#FamilyHistory" onClick={FamilyHistoryButton}>Family History</a>
              <a href="#contact" onClick={contactmeButton}>Contact Me</a>
              <a href="#Politics" onClick={PoliticsButton}>Parliamentary Case Tracker</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
