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
  constructor(params) {
    this.element = params.element;
    this.slides = this.element.getElementsByClassName(params.slides);
    this.activeIndex = params.activeIndex;
    this.slidersShownNum = params.slidersShownNum;

    //Navigation
    this.nextBtn = this.element.querySelector('.slider-next');
    this.prevBtn = this.element.querySelector('.slider-prev');
    this.pagination = this.element.querySelector('[name="slider-num"]');
    //Pagination info
    this.output = this.element.querySelector('output');
    //Shifting slider container info
    this.firstSlideOffset = params.firstSlideOffset || 0;
    this.sliderInner = this.element.querySelector(params.sliderInner);
    this.slideWidth = this.slides[0].offsetWidth + parseInt(window.getComputedStyle(this.slides[0]).marginRight) + parseInt(window.getComputedStyle(this.slides[0]).marginLeft);
    this.shownSlideIndex = this.activeIndex;
    //Calls
    if(this.nextBtn) {
      this.nextBtn.addEventListener('click', this.onNext);
    }
    if(this.prevBtn) {
      this.prevBtn.addEventListener('click', this.onPrev);
    }
    this.setSlidesAmount();
    if(params.activeOnClick) {
      for(let i = 0; i < this.slides.length; i ++) {
        this.slides[i].addEventListener('click', this.onSlideClick);
      }
    }
    this.initPagination();
  }

  initPagination() {
    this.pagination.setAttribute('min', 0);
    this.pagination.setAttribute('max', this.slides.length - 1);
    this.pagination.value = this.activeIndex;
    if(this.pagination) {
      this.pagination.addEventListener('input', this.onPaginationChange);
    }
  }

  setSlidesAmount() {
    const slidesAmountOutput = this.element.querySelector('.slides-amount');
    slidesAmountOutput.innerHTML = `${this.slides.length < 10 ? '0' : ''}${this.slides.length}`;
  }

  addActive(index) {
    this.slides[this.activeIndex].classList.remove('active');
    if(index === 0 && this.activeIndex === (this.slides.length - 1)) {
      this.shownSlideIndex = 0;
    }
    else if(index < this.activeIndex && this.shownSlideIndex !== 0) {
      this.shownSlideIndex = this.shownSlideIndex - (this.activeIndex - index);
      if (this.shownSlideIndex < 0) {
        this.shownSlideIndex = 0;
      }
    }
    else if(index === (this.slides.length - 1) && this.shownSlideIndex === 0) {
      this.shownSlideIndex = this.slidersShownNum - 1;
    }
    else if(index > this.activeIndex && this.shownSlideIndex < (this.slidersShownNum - 1)) {
      this.shownSlideIndex = this.shownSlideIndex + (index - this.activeIndex);
      if (this.shownSlideIndex > this.slidersShownNum - 1) {
        this.shownSlideIndex = this.slidersShownNum - 1;
      }
    }
    this.activeIndex = index;
    this.setOutputAndPaginationValue();
    this.slides[this.activeIndex].classList.add('active');

    this.applySliderInnerStyles();
  }

  setOutputAndPaginationValue() {
    this.output.innerHTML = `${this.activeIndex < 9 ? '0' : ''}${this.activeIndex + 1}`;
    this.pagination.value = this.activeIndex;
  }

  applySliderInnerStyles() {
    this.sliderInner.setAttribute('style', `left: ${-this.slideWidth * (this.activeIndex - this.shownSlideIndex - this.firstSlideOffset)}px`);
  };

  onNext = () => {
    this.addActive((this.activeIndex + 1) % this.slides.length);
  };

  onPrev = () => {
    this.addActive((this.activeIndex - 1 + this.slides.length) % this.slides.length);
  };

  onPaginationChange = () => {
    this.addActive(+this.pagination.value);
  };

  onSlideClick = (event) => {
    let clickedSlideIndex;
    for(let i = 0; i < this.slides.length; i ++) {
      if(event.currentTarget === this.slides[i]) {
        clickedSlideIndex = i;
      }
    }
    this.addActive(clickedSlideIndex);
  }
}