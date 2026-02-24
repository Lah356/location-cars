document.addEventListener("DOMContentLoaded", () => {

  let slides = document.querySelectorAll(".slide");
  let nextBtn = document.querySelector(".next");
  let prevBtn = document.querySelector(".prev");
  let dotsBox = document.querySelector(".dots");

  let index = 0;

  // Create dots
  slides.forEach((slide, i) => {
    let dot = document.createElement("span");
    if (i === 0) dot.classList.add("active");
    dotsBox.appendChild(dot);

    dot.addEventListener("click", () => {
      index = i;
      showSlide();
    });
  });

  let dots = document.querySelectorAll(".dots span");

  function showSlide() {
    slides.forEach(slide => slide.classList.remove("active"));
    dots.forEach(dot => dot.classList.remove("active"));

    slides[index].classList.add("active");
    dots[index].classList.add("active");
  }

  nextBtn.addEventListener("click", () => {
    index++;
    if (index >= slides.length) index = 0;
    showSlide();
  });

  prevBtn.addEventListener("click", () => {
    index--;
    if (index < 0) index = slides.length - 1;
    showSlide();
  });

  // Auto Slide
  setInterval(() => {
    index++;
    if (index >= slides.length) index = 0;
    showSlide();
  }, 5000);

});

// ===== Scroll Reveal Cards =====
const cards = document.querySelectorAll(".car-card");

function revealCards() {
  cards.forEach((card) => {
    const cardTop = card.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (cardTop < windowHeight - 100) {
      card.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealCards);
window.addEventListener("load", revealCards);

// ===== Slider AutoPlay =====
const slides = document.querySelectorAll(".slide");
let index = 0;

function showSlide(i) {
  slides.forEach((slide) => slide.classList.remove("active"));
  slides[i].classList.add("active");
}

// Auto change every 5s
setInterval(() => {
  index++;
  if (index >= slides.length) index = 0;
  showSlide(index);
}, 5000);
