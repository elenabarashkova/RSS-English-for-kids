window.addEventListener('load', function() {
  class MapSlider extends Slider {
    constructor(params) {
      super(params);
      this.mapElems = document.getElementsByClassName(params.mapIcons);
      //call
      for(let i = 0; i < this.slides.length; i ++) {
        this.slides[i].addEventListener('click', this.onSlideClickMap);
      }
      for(let i = 0; i < this.mapElems.length; i ++) {
        this.mapElems[i].addEventListener('click', this.onMapItemClick);
      }
    };
    addActive(index) {
      for(let i = 0; i < this.mapElems.length; i++) {
        this.mapElems[i].classList.remove('active');
      }
      super.addActive(index);
      let sliderItemDataName = this.slides[this.activeIndex].dataset.name;
      let mapPin;

      for(let i = 0; i < this.mapElems.length; i++) {
        if(this.mapElems[i].dataset.name ===  sliderItemDataName) {
          mapPin = this.mapElems[i];
        }
      }
      if(mapPin) {
        mapPin.classList.add('active');
      }
    };
    onMapItemClick= () => {
      let matchingToMapItemIndex;
      let mapItemDataName = event.currentTarget.dataset.name;
      for(let i = 0; i < this.slides.length; i++) {
        if(this.slides[i].dataset.name ===  mapItemDataName) {
          matchingToMapItemIndex = i;
        }
      }
      this.addActive(matchingToMapItemIndex);
    };
  }

  const mapParams = {
    element: document.querySelector('.map-slider'),
    activeIndex: 1,
    slidersShownNum: window.matchMedia("(min-width: 1920px)").matches ? 8 : 5,
    activeOnClick: true,
    slides: 'aside-slide',
    sliderInner: '.aside-slider-inner',
    mapIcons: 'map-animal-icon',
  };
  const mapSlider = window.mapSlider = new MapSlider(mapParams);
});