import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS/Homepage.css';




function HomePage(){

  const navigate = useNavigate();



    const images = [
      { id: 1, src: "/Pictures/BildeAvRuterDisplay.jpg", alt: "Gallery Image 1", caption: "A LED display that show realtime busstimes for my busstop" },
      { id: 2, src: "/Pictures/LoddingSkjermResultat.jpg", alt: "Gallery Image 2", caption: "Results of soldering the LED display" },
      { id: 3, src: "/Pictures/ErlingParis.jpg", alt: "Gallery Image 3", caption: "Me in Paris " },
      { id: 4, src: "/Pictures/MeAndMeg.jpg", alt: "Gallery Image 4", caption: "Me and my girlfriend in Ålesund" },
      { id: 5 , src: "/Pictures/pantilt.jpg", alt: "Gallery Image 5", caption: "The pan-tilt structure for my motion sensor"},
      { id: 6 , src: "/Pictures/raspberry_camera_setup.jpg", alt: "Gallery Image 6", caption: "Raspberry Pi setup to be mounted"}
    ];

    const handleClick = (projectNumber) => {
      if (projectNumber === 2 || projectNumber === 1 ) {
        navigate('/pages/Project3');
      } else if (projectNumber === 6 || projectNumber === 5) {
        navigate('/pages/Project5');
      } 
    };
      
      

    
        return (
          <div className="gallery-container">
            <div className="gallery-grid">
              {images.map((image) => (
                <div 
                  key={image.id} 
                  className="gallery-item cursor-pointer"
                  onClick={() => handleClick(image.id)}
                >
                  <img src={image.src} alt={image.alt} />
                  <div className="overlay">{image.caption}</div>
                </div>
              ))}
            </div>
          </div>
        );

    }

export default HomePage;