import React, { useState, useEffect } from "react";
import './Slider.css';

export default function PagesSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideCount = 4; // Number of slides

  const updateSlidePosition = () => {
    const slides = document.querySelector('.slides');
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
  };

  useEffect(() => {
    updateSlidePosition();
  }, [currentIndex]);

  const handlePrevClick = () => {
    setCurrentIndex(currentIndex > 0 ? currentIndex - 1 : slideCount - 1);
  };

  const handleNextClick = () => {
    setCurrentIndex(currentIndex < slideCount - 1 ? currentIndex + 1 : 0);
  };

  return (
    <div className="slider">
      <div className="slides">
        <div className="slide">
          <img src="https://www.voyagerpacific.com/wp-content/uploads/2021/08/single-family-home.jpg" alt="Slide 1" />
        </div>
        <div className="slide">
          <img src="https://dmd.info.pl/wp-content/uploads/2019/08/DSC_2857-scaled.jpg" alt="Slide 2" />
        </div>
        <div className="slide">
          <img src="https://d28pk2nlhhgcne.cloudfront.net/assets/app/uploads/sites/3/2022/11/modern-studio-apartment-1220x671.jpg" alt="Slide 3" />
        </div>
        <div className="slide">
          <img src="https://img.vistarooms.com/gallery/vista-sadh-villa-c227d4.jpg" alt="Slide 4" />
        </div>
      </div>
      <div className="navigation">
        <button className="nav-btn" id="prev" onClick={handlePrevClick}>❮</button>
        <button className="nav-btn" id="next" onClick={handleNextClick}>❯</button>
      </div>
    </div>
  );
}
