import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../CSS/Homepage.css';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import { FaLock } from 'react-icons/fa';
/* From Uiverse.io by alexmaracinaru */ 



function HomePage(){



    const images = [
      { id: 1, src: "/Pictures/BildeAvRuterDisplay.jpg", alt: "Gallery Image 1", caption: "A LED display that show realtime busstimes for my busstop" },
      { id: 2, src: "/Pictures/LoddingSkjermResultat.jpg", alt: "Gallery Image 2", caption: "Results of soldering the LED display" },
      { id: 3, src: "/Pictures/ErlingParis.jpg", alt: "Gallery Image 3", caption: "Me in Paris " },
      { id: 4, src: "/Pictures/MeAndMeg.jpg", alt: "Gallery Image 4", caption: "Me and my girlfriend in Ålesund" },
      { id: 5 , src: "/Pictures/View.jpg", alt: "Gallery Image 5", caption: "View from the family house in Ålesund"},
      { id: 6 , src: "/Pictures/Juletre.jpg", alt: "Gallery Image 6", caption: "Our Christmas Tree"}
    ];


    
    return (
      <div className="home-container">


        <header className="home-header">
          <h1 className="home-title">Erling Nupen</h1>
          <p className="home-subtitle">Explore my projects and professional journey</p>
        </header>

        <div className="gallery-container">
          <div className="gallery-grid">
            {images.map((image) => (
              <div key={image.id} className="gallery-item">
                <img src={image.src} alt={image.alt} />
                <div className="overlay">{image.caption}</div>
              </div>
            ))}
          </div>

        </div>

      </div>
    );

    }

export default HomePage;