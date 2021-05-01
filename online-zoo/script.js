// Dark theme
const darkThemeToggle = document.getElementById('toggle-button');
const body = document.querySelector('body');
darkThemeToggle.addEventListener('change', function() {
  if (darkThemeToggle.checked) {
    body.classList.add('dark-theme');
  } else {
    body.classList.remove('dark-theme');
  }
});

// Mob menu
const menu = document.querySelector('header nav');
const mobBtn = document.querySelector('.mob-btn');
const mobMenuWidth = window.matchMedia("(max-width: 1199px)");

mobBtn.addEventListener('click', function () {
  menu.classList.toggle('active');
});

window.addEventListener('resize', function() {
  if(!mobMenuWidth.matches) {
    menu.classList.remove('active');
  }
});

//Sliders
class Slider {
  constructor(element) {
    this.element = element;
    this.slides = element.getElementsByClassName('slide');
    this.nextBtn = element.querySelector('.slider-next');
    this.prevBtn = element.querySelector('.slider-prev');
    this.pagination = element.querySelector('[name="slider-num"]');
    this.activeIndex = 0;


    this.nextBtn.addEventListener('click', this.onNext);
    this.prevBtn.addEventListener('click', this.onPrev);
  }

  addActive(index) {
    this.slides[this.activeIndex].classList.remove('active');
    this.activeIndex = index;
    this.slides[this.activeIndex].classList.add('active');
  }

  onNext = () => {
    this.addActive((this.activeIndex + 1) % this.slides.length);
  };

  onPrev = () => {
    this.addActive((this.activeIndex - 1 + this.slides.length) % this.slides.length);
  }
}

const petsInZooSlider = new Slider(document.querySelector('.pets-in-zoo-slider'));