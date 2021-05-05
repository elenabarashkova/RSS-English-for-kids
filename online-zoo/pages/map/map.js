window.addEventListener('load', function() {
  class MapSlider extends Slider {
    constructor(params) {
      super(params);
      this.mapElems = document.querySelector(params.mapIcons);
    };
  }

  const mapParams = {
    element: document.querySelector('.map-slider'),
    activeIndex: 1,
    slidersShownNum: window.matchMedia("(min-width: 1920px)").matches ? 8 : 5,
    slides: 'aside-slide',
    sliderInner: '.aside-slider-inner',
    mapIcons: '.map-animal-icon',
  };
  const mapSlider = window.mapSlider = new MapSlider(mapParams);
});