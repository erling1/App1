
import React from 'react';
import { Link } from 'react-router-dom';
import './CSS/Navbar.css'; 

export function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-links">
        <Link to="/" className="navbar-link">Home</Link>
        <Link to="/pages/AboutMe" className="navbar-link">About Me</Link>
        <Link to="/pages/ContactMe" className="navbar-link">Contact Me</Link>
      </div>
    </nav>
  );
}
