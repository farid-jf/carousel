const slider = document.querySelector('.slider');
const sliderInner = slider.querySelector('.slider-inner');
const slides = sliderInner.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const indicators = document.querySelectorAll('.indicators span');

let slideIndex = 0;
let slideWidth = slides[0].clientWidth;

const showSlide = (n) => {
  slideIndex = (n + slides.length) % slides.length;
  sliderInner.style.transform = `translateX(-${slideIndex * slideWidth}px)`;

  // Update indicators
  indicators.forEach((indicator, index) => {
    indicator.classList.toggle('active', index === slideIndex);
  });
};

prevBtn.addEventListener('click', () => showSlide(slideIndex - 1));
nextBtn.addEventListener('click', () => showSlide(slideIndex + 1));

indicators.forEach((indicator, index) => {
  indicator.addEventListener('click', () => showSlide(index));
});

// Initial slide
showSlide(slideIndex);
