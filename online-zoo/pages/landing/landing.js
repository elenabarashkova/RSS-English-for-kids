window.addEventListener('load', function() {
  const petsInZooParams = {
    element: document.querySelector('.pets-in-zoo-slider'),
    activeIndex: 0,
    slidersShownNum: 4,
    slides: 'slide',
    sliderInner: '.slider-inner',
  };
  const petsInZooSlider = window.petsInZooSlider = new Slider(petsInZooParams);

  const watchAnimalParams = {
    element: document.querySelector('.watch-animal-slider'),
    activeIndex: 1,
    slidersShownNum: 1,
    firstSlideOffset: 1,
    activeOnClick: true,
    slides: 'slide',
    sliderInner: '.slider-inner',
  };
  const watchAnimalSlider = window.watchAnimalSlider = new Slider(watchAnimalParams);

  const howItWorksParams = {
    element: document.querySelector('.how-it-works-slider'),
    activeIndex: 0,
    slidersShownNum: 1,
    slides: 'slide',
    sliderInner: '.slider-inner',
  };
  const howItWorksSlider = window.watchAnimalSlider = new Slider(howItWorksParams);

  const testimonialsParams = {
    element: document.querySelector('.testimonials-slider'),
    activeIndex: 0,
    slidersShownNum: 2,
    slides: 'slide',
    sliderInner: '.slider-inner',
  };
  const testimonialsSlider = window.watchAnimalSlider = new Slider(testimonialsParams);
});
