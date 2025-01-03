import React from 'react';
import '../CSS/AboutMe.css';  // Add your CSS styling for AboutMe

function AboutMe() {
  return (
    <div className="about-container">
      <h1>About Me</h1>
      <div className="about-summary">
        <p>
          Hi, I'm Erling, a highly motivated and enthusiastic data scientist with a master's degree in Particle Physics from the University of Oslo. I have a strong foundation in machine learning, data analysis, image analysis, mathematics, and various programming languages. I am passionate about leveraging my skills to solve complex problems and make data-driven decisions.
        </p>
        <p>
          With a keen interest in continuous learning, I seek opportunities in dynamic and innovative environments where I can use my knowledge and grow professionally. Over the past year, as my Python and coding skills have significantly improved, I have developed a passion for various fun DIY projects, and I can't wait to experiment using affordable hardware such as Raspberry Pi and a range of sensors to create cool and interesting projects. I am excited to share the results of the various projects, as well as other intersting things i might come across.
          This website will be my central hub of information where I can put out a range of information, not just the DIY projects I am currently working on.
        </p>
      </div>

  

      <div className="about-goals">
        <h2>My Goals</h2>
        <p>As I continue to develop my career, I aim to:</p>
        <ul>
          <li>Stay updated with the latest advancements in data science and machine learning.</li>
          <li>Obtain certifications in Azure and other relevant technologies.</li>
          <li>Contribute to impactful projects where I can utilize my skills in data analysis and machine learning to solve real-world problems.</li>
          <li>Collaborate with like-minded professionals and expand my professional network.</li>
        </ul>
      </div>
    </div>
  );
}

export default AboutMe;
