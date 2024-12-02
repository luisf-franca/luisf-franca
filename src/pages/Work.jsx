import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import workData from '../json/works.json';
import '../styles/work.css';
import GalleryPrev from '../icons/GalleryPrev';
import GalleryNext from '../icons/GalleryNext';

const Work = () => {
  const { id } = useParams();
  const project = workData.find((project) => project.id === id);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    project.image4,
    project.image5,
    project.image6,
    project.image7,
    project.image8,
  ].filter(Boolean);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  return (
    <section id="work" className="work">
      <hgroup>
        <h2>{project.title}</h2>
        <p>{project.description}</p>
      </hgroup>

      <picture>
        <div className="work-images">
          {project.image1 && <img src={project.image1} />}
          {project.image2 && <img src={project.image2} />}
          {project.image3 && <img src={project.image3} />}
        </div>

        <div>
          {images.length > 0 && (
            <div className="carousel-container">
              <img
                src={images[currentImageIndex]}
                alt={`${project.title} ${currentImageIndex + 1}`}
                className={`active-image`}
              />

              <button className="prev" onClick={handlePrev}>
                <GalleryPrev />
              </button>

              <button className="next" onClick={handleNext}>
                <GalleryNext />
              </button>
            </div>
          )}
        </div>
      </picture>
    </section>
  );
};

export default Work;
