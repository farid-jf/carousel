const slider = document.getElementById('slider');
const sliderInner = document.getElementById('sliderInner');
const slides = sliderInner.querySelectorAll('#slide');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const indicators = document.querySelectorAll('#indicators span');

let slideIndex = 0;
let slideWidth = slides[0].clientWidth;
let autoplayInterval; // Variable to store the interval ID

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
  }, 10000); // Change slides every 10 seconds (10000 milliseconds)
};

const stopAutoplay = () => {
  clearInterval(autoplayInterval);
};

// Initial slide
showSlide(slideIndex);

// Button event listeners
prevBtn.addEventListener('click', () => {
  showSlide(slideIndex - 1);
  stopAutoplay(); // Stop autoplay when user interacts
});
nextBtn.addEventListener('click', () => {
  showSlide(slideIndex + 1);
  stopAutoplay(); // Stop autoplay when user interacts
});

// Indicator event listeners
indicators.forEach((indicator, index) => {
  indicator.addEventListener('click', () => {
    showSlide(index);
    stopAutoplay(); // Stop autoplay when user interacts
  });
});

// Start autoplay on page load (optional)
startAutoplay(); // Uncomment this line to enable autoplay on page load
