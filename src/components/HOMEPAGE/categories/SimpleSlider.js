import React from "react";
import './Categories.css'

export default function SimpleSlider() {
  const slides = document.querySelector('.slides');
const slideCount = slides.children.length;
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
let currentIndex = 0;

function updateSlidePosition() {
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : slideCount - 1;
    updateSlidePosition();
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex < slideCount - 1) ? currentIndex + 1 : 0;
    updateSlidePosition();
});

  
  return(

    <div class="slider">
    <div class="slides">
        {/* <!-- Slide 1 --> */}
        <div class="slide">
            <img src="https://www.voyagerpacific.com/wp-content/uploads/2021/08/single-family-home.jpg" alt="Slide 1"></img>
        </div>
        {/* <!-- Slide 2 --> */}
        <div class="slide">
            <img src="https://dmd.info.pl/wp-content/uploads/2019/08/DSC_2857-scaled.jpg" alt="Slide 2"></img>
        </div>
        {/* <!-- Slide 3 --> */}
        <div class="slide">
            <img src="https://d28pk2nlhhgcne.cloudfront.net/assets/app/uploads/sites/3/2022/11/modern-studio-apartment-1220x671.jpg" alt="Slide 3"></img>
        </div>
        {/* <!-- Slide 4 --> */}
        <div class="slide">
            <img src="https://img.vistarooms.com/gallery/vista-sadh-villa-c227d4.jpg" alt="Slide 4"></img>
        </div>
    </div>
    <div class="navigation">
        <button class="nav-btn" id="prev">❮</button>
        <button class="nav-btn" id="next">❯</button>
    </div>
</div>
  )
}

