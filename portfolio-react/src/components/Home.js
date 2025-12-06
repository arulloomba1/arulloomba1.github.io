import React, { useState, useEffect } from 'react';
import './Home.css';

const Home = () => {
  const photos = [
    {
      id: 7,
      src: '/photos/IMG 1721.jpg',
      alt: 'Photo 1'
    },
    {
      id: 8,
      src: '/photos/IMG 2273.jpg',
      alt: 'Photo 2'
    },
    {
      id: 9,
      src: '/photos/IMG 3926.jpg',
      alt: 'Photo 3'
    },
    {
      id: 1,
      src: '/photos/IMG_0501.jpg',
      alt: 'Photo 4'
    },
    {
      id: 2,
      src: '/photos/IMG_8564.jpg',
      alt: 'Photo 5'
    },
    {
      id: 3,
      src: '/photos/IMG_8701.jpg',
      alt: 'Photo 6'
    },
    {
      id: 4,
      src: '/photos/IMG_8922.jpg',
      alt: 'Photo 7'
    },
    {
      id: 5,
      src: '/photos/IMG_9797.jpg',
      alt: 'Photo 8'
    },
    {
      id: 6,
      src: '/photos/IMG_9974.jpg',
      alt: 'Photo 9'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
    }, 4000); // Auto-slide every 4 seconds

    return () => clearInterval(interval);
  }, [photos.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="home-page">
      <div className="home-container">
        <div className="intro-section">
          <h1>Arul Loomba</h1>
          <p className="intro-subtitle">Software Engineer | Robotics Enthusiast</p>
          <p className="intro-description">
            Welcome to my portfolio. I'm passionate about building innovative solutions 
            at the intersection of software engineering and robotics. Explore my projects, 
            experiences, and journey through technology.
          </p>
        </div>

        <div className="media-gallery">
          <h2>Gallery</h2>
          <div className="carousel-container">
            <button className="carousel-button carousel-button-prev" onClick={goToPrevious}>
              ‹
            </button>
            <div className="carousel-wrapper">
              <div 
                className="carousel-slides" 
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {photos.map((photo) => (
                  <div key={photo.id} className="carousel-slide">
                    <img src={encodeURI(photo.src)} alt={photo.alt} />
                  </div>
                ))}
              </div>
            </div>
            <button className="carousel-button carousel-button-next" onClick={goToNext}>
              ›
            </button>
            <div className="carousel-dots">
              {photos.map((_, index) => (
                <button
                  key={index}
                  className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

