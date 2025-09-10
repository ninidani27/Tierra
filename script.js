const track = document.querySelector(".carousel-track");
const slides = Array.from(track.children);
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

let currentSlide = 0;
let autoPlayInterval;

function updateCarousel() {
  track.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  updateCarousel();
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  updateCarousel();
}

function startAutoPlay() {
  autoPlayInterval = setInterval(nextSlide, 5000);
}

function stopAutoPlay() {
  clearInterval(autoPlayInterval);
  startAutoPlay();
}

nextButton.addEventListener("click", () => {
  nextSlide();
  stopAutoPlay();
});
prevButton.addEventListener("click", () => {
  prevSlide();
  stopAutoPlay();
});

// iniciar autoplay al cargar
startAutoPlay();
