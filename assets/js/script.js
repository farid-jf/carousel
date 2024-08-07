// carousel
const slider = document.getElementById('slider');
const sliderInner = document.getElementById('sliderInner');
const slides = sliderInner.querySelectorAll('#slide');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const indicators = document.querySelectorAll('#indicators span');

let slideIndex = 0;
let slideWidth = slides[0].clientWidth;
let autoplayInterval;

const showSlide = (n) => {
  slideIndex = (n + slides.length) % slides.length;
  sliderInner.style.transform = `translateX(-${slideIndex * slideWidth}px)`;

  indicators.forEach((indicator, index) => {
    indicator.classList.toggle('active', index === slideIndex);
  });
};

const startAutoplay = () => {
  autoplayInterval = setInterval(() => {
    showSlide(slideIndex + 1);
  }, 5000);
};

const stopAutoplay = () => {
  clearInterval(autoplayInterval);
};

// Initial slide
showSlide(slideIndex);

// Button event listeners
prevBtn.addEventListener('click', () => {
  showSlide(slideIndex - 1);
  stopAutoplay();
  startAutoplay();
});
nextBtn.addEventListener('click', () => {
  showSlide(slideIndex + 1);
  stopAutoplay();
  startAutoplay();
});

// Indicator event listeners
indicators.forEach((indicator, index) => {
  indicator.addEventListener('click', () => {
    showSlide(index);
    stopAutoplay();
    startAutoplay();
  });
});

// Start autoplay on page load (optional)
// startAutoplay();

// Swipe functionality
let startX, endX;

slider.addEventListener('touchstart', (event) => {
  startX = event.touches[0].clientX;
});

slider.addEventListener('touchend', (event) => {
  endX = event.changedTouches[0].clientX;

  if (endX < startX) {
    showSlide(slideIndex + 1); // Swipe right
  } else if (endX > startX) {
    showSlide(slideIndex - 1); // Swipe left
  }
  stopAutoplay();
  startAutoplay();
});

startAutoplay();
