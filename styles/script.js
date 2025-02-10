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




// Show the scroll to top button when user scrolls down
window.onscroll = function() {
    let scrollButton = document.getElementById("scrollButton");

    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollButton.style.display = "block"; // Show button
    } else {
        scrollButton.style.display = "none"; // Hide button
    }
};

// Smooth scroll to the top when the button is clicked
document.getElementById("scrollButton").addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
