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
window.addEventListener('load', function() {
  class Slider {
    constructor(element) {
      this.element = element;
      this.slides = element.getElementsByClassName('slide');
      this.activeIndex = 0;
      this.slidersShownNum = 4;
      //Navigation
      this.nextBtn = element.querySelector('.slider-next');
      this.prevBtn = element.querySelector('.slider-prev');
      this.pagination = element.querySelector('[name="slider-num"]');
      //Pagination info
      this.output = element.querySelector('output');
      this.pagination.setAttribute('min', 0);
      this.pagination.setAttribute('max', this.slides.length - 1);
      this.pagination.value = 0;
      //Shifting slider container info
      this.sliderInner = element.querySelector('.slider-inner');
      this.slideWidth = this.slides[0].offsetWidth + parseInt(window.getComputedStyle(this.slides[0]).marginRight);
      this.shownSlideIndex = this.activeIndex;
      //Calls
      this.nextBtn.addEventListener('click', this.onNext);
      this.prevBtn.addEventListener('click', this.onPrev);
      this.pagination.addEventListener('input', this.onPaginationChange);
      this.setSlidesAmount();
    }

    setSlidesAmount() {
      const slidesAmountOutput = this.element.querySelector('.slides-amount');
      slidesAmountOutput.innerHTML = `${this.slides.length < 10 ? '0' : ''}${this.slides.length}`;
    }

    addActive(index) {
      this.slides[this.activeIndex].classList.remove('active');
      if(index < this.activeIndex && this.shownSlideIndex !== 0) {
        this.shownSlideIndex = this.shownSlideIndex - 1;
      }
      else if(index === (this.slides.length - 1) && this.shownSlideIndex === 0) {
        this.shownSlideIndex = this.slidersShownNum - 1;
      }
      else if(index > this.activeIndex && this.shownSlideIndex < (this.slidersShownNum - 1)) {
        this.shownSlideIndex = this.shownSlideIndex + 1;
      }

      this.activeIndex = index;
      this.slides[this.activeIndex].classList.add('active');
      this.output.innerHTML = `${this.activeIndex < 9 ? '0' : ''}${this.activeIndex + 1}`;
      this.pagination.value = this.activeIndex;
      this.sliderInner.setAttribute('style', `left: -${this.slideWidth * (this.activeIndex - this.shownSlideIndex)}px`);
    }

    onNext = () => {
      this.addActive((this.activeIndex + 1) % this.slides.length);
    };

    onPrev = () => {
      this.addActive((this.activeIndex - 1 + this.slides.length) % this.slides.length);
    };

    onPaginationChange = () => {
      this.addActive(+this.pagination.value);
    };
  }
  const petsInZooSlider = new Slider(document.querySelector('.pets-in-zoo-slider'));

});


