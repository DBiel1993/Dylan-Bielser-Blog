let slideIndex = 0;

function showSlides(n) {
  const slides = document.querySelectorAll('.carousel-item');
  if (n >= slides.length) { slideIndex = 0 }
  if (n < 0) { slideIndex = slides.length - 1 }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slides[slideIndex].style.display = 'block';
}

function moveSlide(n) {
  showSlides(slideIndex += n);
}

document.addEventListener('DOMContentLoaded', function() {
  showSlides(slideIndex);
  setInterval(() => {
    moveSlide(1);
  }, 2000); // Change slide every second
});