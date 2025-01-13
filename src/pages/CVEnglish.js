import React from 'react';
import { useNavigate } from 'react-router-dom';
import html2pdf from 'html2pdf.js';
import '../CSS/CV.css';

function CVEnglish() {

    const navigate = useNavigate();
    const handleClick =() =>{

        navigate("/pages/CV")
    }


    const handleDownload = () => {
        const cvElement = document.getElementById('cv-content');
        const opt = {
            margin: 1,
            filename: 'Erling_Nupen_CV_English.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        };
            
            html2pdf().set(opt).from(cvElement).save();
          };
  return (
    <div className="cv-container" id='cv-content'>
      <header className="cv-header">
        <h1>Erling Nupen</h1>

        <button className="Btn-cv" onClick={handleDownload}>
          <svg className="svgIcon" viewBox="0 0 384 512" height="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path>
          </svg>
          <span className="icon2"></span>
          <span className="tooltip">Download</span>
        </button>

        <button className="button-english-v" onClick={handleClick}>Norwegian CV</button>
      </header>

      <section className="cv-section">
        <h2>Qualifications</h2>
        <p>
          Recent graduate with a Master's degree in Particle Physics from UiO. Looking for a junior position or graduate role in
          a company with a dynamic work environment and opportunities for professional development. I have excellent
          knowledge in machine learning, data analysis, image analysis, mathematics and physics, and various programming languages.
          Currently exploring various Azure certifications.
        </p>
      </section>

      <section className="cv-section">
        <h2>Education</h2>
        <ul>
          <li>
            <strong>2023-present | Further Studies in Computer Science | University of Oslo</strong>
            <ul>
              <li>Current focus is on advancing my expertise in Python and C++, with particular emphasis on writing efficient code for machine learning models</li>
              <li>Wrote code for several projects, including deep learning networks for number recognition and data analysis, both from scratch and using frameworks like PyTorch, Scikit, and TensorFlow</li>
              <li>HTML, CSS, JavaScript, APIs, React</li>
            </ul>
          </li>
          <li>
            <strong>2021-2023 | M.Sc. in Particle Physics | University of Oslo</strong>
            <ul>
              <li>Master's Thesis: "Exploring The Impact Of Dimension-8 Operators In A Higgs Effective Field Theory Framework"</li>
              <li>Focus was on theoretical physics and advanced mathematics</li>
              <li>Other key aspects include data analysis and visualization of data from the particle accelerator at CERN</li>
              <li>Several projects in C++</li>
            </ul>
          </li>
          <li>
            <strong>2017-2021 | B.Sc. in Materials Science for Energy and Nanotechnology | University of Oslo</strong>
            <ul>
              <li>Gained solid understanding of materials science, and a good introduction to statistics, programming, mathematics and physics</li>
            </ul>
          </li>
        </ul>
      </section>

      <section className="cv-section">
        <h2>Work Experience</h2>
        <ul>
          <li>
            <strong>2022 - present | Store Associate | Coop Øst, Oslo</strong>
            <ul>
              <li>Customer orders & home deliveries</li>
              <li>Inventory control</li>
              <li>Handling customer complaints & Customer follow-up</li>
            </ul>
          </li>
          <li>
            <strong>2017-2022 | Store Associate | Norgesgruppen AS, Oslo</strong>
            <ul>
              <li>Responsible for managing the store independently during weekends, and entrusted with training new employees</li>
            </ul>
          </li>
        </ul>
      </section>

      <section className="cv-section">
        <h2>Language and IT Skills</h2>
        <ul>
          <li><strong>Norwegian:</strong> Native</li>
          <li><strong>English:</strong> Excellent written and verbal communication</li>
          <li><strong>Python:</strong> Excellent; wrote code for several projects involving machine learning models, data analysis, evolutionary algorithms and deep learning models</li>
          <li><strong>C++:</strong> Good; wrote code for several projects involving parallel processing, Markov chains and various numerical methods and algorithms</li>
          <li><strong>Git/Github:</strong> Excellent; Github is the preferred cloud platform where most of my projects have been stored</li>
          <li><strong>Azure:</strong> Beginner; exploring certifications in Azure, with AZ-204 being the goal during fall 2024</li>
          <li><strong>APIs:</strong> Good; used APIs to fetch data from various websites, to create different regression models and time series analyses</li>
          <li><strong>HTML, CSS, JavaScript, React:</strong> Good; these languages will be the main focus for fall 2024</li>
          <li><strong>SQL:</strong> Beginner</li>
        </ul>
      </section>
    </div>
  );
}

export default CVEnglish;