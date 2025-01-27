function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function initCarousel(carouselId, prevBtnId, nextBtnId) {
  const carousel = document.querySelector(carouselId);
  const prevBtn = document.querySelector(prevBtnId);
  const nextBtn = document.querySelector(nextBtnId);
  const slides = carousel.querySelector('.carousel-slide');
  const totalSlides = slides.children.length;
  let currentIndex = 0;

  function updateCarousel() {
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalSlides - 1;
    updateCarousel();
  });

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex < totalSlides - 1) ? currentIndex + 1 : 0;
    updateCarousel();
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initCarousel('.carousel-1', '#prevBtn1', '#nextBtn1');
  initCarousel('.carousel-2', '#prevBtn2', '#nextBtn2');
  initCarousel('.carousel-3', '#prevBtn3', '#nextBtn3');

  const navLinks = document.querySelectorAll('.fixed-nav a');

  function setActiveLink() {
    let index = navLinks.length;

    while (--index && window.scrollY + 50 < navLinks[index].offsetTop) {}

    navLinks.forEach((link) => link.classList.remove('active'));
    navLinks[index].classList.add('active');
  }

  setActiveLink();
  window.addEventListener('scroll', setActiveLink);
});

