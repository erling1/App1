import React from 'react';
import '../CSS/AboutMe.css';  // Add your CSS styling for AboutMe

function AboutMe() {
  return (
    <div className="about-container">
      <h1>About Me</h1>
      <div className="about-summary">
        <p>
          Hi, I'm John Doe, a passionate web developer with experience in building modern, responsive, and user-friendly web applications. I specialize in JavaScript, React, and front-end development, but I also enjoy learning new technologies and expanding my skill set. My goal is to create clean and efficient code while focusing on the best user experience possible.
        </p>
        <p>
          I have worked on various projects ranging from small business websites to large-scale applications. I'm always eager to learn and take on new challenges, and I love collaborating with other developers and teams to bring innovative ideas to life.
        </p>
      </div>

      <div className="about-skills">
        <h2>Skills</h2>
        <ul>
          <li>JavaScript (ES6+)</li>
          <li>React.js & Redux</li>
          <li>HTML5 & CSS3</li>
          <li>Responsive Design & Mobile First</li>
          <li>Version Control (Git, GitHub)</li>
          <li>API Integration (REST, GraphQL)</li>
          <li>UI/UX Design Principles</li>
        </ul>
      </div>

      <div className="about-experience">
        <h2>Experience</h2>
        <p>
          I have worked on a variety of projects as both a freelance developer and part of a team. Here are a few highlights:
        </p>
        <ul>
          <li>
            <strong>Freelance Web Developer</strong> | 2020 - Present
            <p>Worked with clients to design, develop, and deploy custom websites and applications.</p>
          </li>
          <li>
            <strong>Front-End Developer at XYZ Corp</strong> | 2018 - 2020
            <p>Collaborated on a team of developers to build and maintain responsive web applications using React.js and Redux.</p>
          </li>
        </ul>
      </div>

      <div className="about-goals">
        <h2>My Goals</h2>
        <p>
          As I continue to grow in my career, I strive to:
        </p>
        <ul>
          <li>Stay up to date with the latest web development technologies and best practices.</li>
          <li>Expand my knowledge of back-end development and databases.</li>
          <li>Contribute to open-source projects and give back to the developer community.</li>
        </ul>
      </div>
    </div>
  );
}

export default AboutMe;
