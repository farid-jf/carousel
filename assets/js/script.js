

const slider = document.getElementById('slider')
const sliderInner = document.getElementById('sliderInner')
// const slides = document.getElementById('slide')
const slides = sliderInner.querySelectorAll('#slide');
const prevBtn = document.getElementById('prev')
const nextBtn = document.getElementById('next')
// const indicators = document.getElementById('indicators span')
const indicators = document.querySelectorAll('#indicators span');

// const prevBtn = document.querySelector('.prev');
// const nextBtn = document.querySelector('.next');

let slideIndex = 0
let slideWidth = slides[0].clientWidth

// let slideIndex = 0;
// let slideWidth = slides[0].clientWidth;


const showSlide = (n) => {
    slideIndex = (n + slides.length) % slides.length
    sliderInner.style.transform = `translateX(-${slideIndex * slideWidth}px)`

    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === slideIndex)
    })
}

// const showSlide = (n) => {
//   slideIndex = (n + slides.length) % slides.length;
//   sliderInner.style.transform = `translateX(-${slideIndex * slideWidth}px)`;

//   // Update indicators
//   indicators.forEach((indicator, index) => {
    // indicator.classList.toggle('active', index === slideIndex);
//   });
// };

prevBtn.addEventListener('click', () => showSlide(slideIndex - 1))
nextBtn.addEventListener('click', () => showSlide(slideIndex + 1))

// prevBtn.addEventListener('click', () => showSlide(slideIndex - 1));
// nextBtn.addEventListener('click', () => showSlide(slideIndex + 1));

indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => showSlide(index))
})

// indicators.forEach((indicator, index) => {
//   indicator.addEventListener('click', () => showSlide(index));
// });


// Initial slide
showSlide(slideIndex)

// showSlide(slideIndex);

