'use strict';

let currentSlide = 0;
const totalSlides = document.querySelectorAll('.slider-container img').length;
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

function showSlide(index) {
    const slides = document.querySelectorAll('.slider-container img');
    if (index >= 0 && index < totalSlides) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.style.display = 'block';
            } else {
                slide.style.display = 'none';
            }
        });
        currentSlide = index;
        updateButtons();
    }
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

function nextSlide() {
    showSlide(currentSlide + 1);
}
function updateButtons() {
    if (currentSlide === 0) {
        prevBtn.style.display = 'none';
    } else {
        prevBtn.style.display = 'block';
    }
    if (currentSlide === totalSlides - 1) {
        nextBtn.style.display = 'none';
    } else {
        nextBtn.style.display = 'block';
    }
}

showSlide(currentSlide);