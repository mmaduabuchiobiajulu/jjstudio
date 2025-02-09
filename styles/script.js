// Carousel functionality for navigation
let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;

const prevButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');

// Function to show the next slide
function showNextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateCarouselPosition();
}

// Function to show the previous slide
function showPrevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateCarouselPosition();
}

// Update the carousel position based on currentIndex
function updateCarouselPosition() {
    const carousel = document.querySelector('.carousel');
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Event listeners for the buttons
nextButton.addEventListener('click', showNextSlide);
prevButton.addEventListener('click', showPrevSlide);

// Auto-slide every 3 seconds (3000ms)
setInterval(showNextSlide, 3000);
