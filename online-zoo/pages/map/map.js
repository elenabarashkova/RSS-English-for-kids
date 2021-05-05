window.addEventListener('load', function() {
  class MapSlider extends Slider {
    constructor(params) {
      super(params);
      this.activeItemData = 'panda';
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
      this.activeItemData = this.slides[this.activeIndex].dataset.name;
      let mapPin;
      for(let i = 0; i < this.mapElems.length; i++) {
        if(this.mapElems[i].dataset.name ===  this.activeItemData) {
          mapPin = this.mapElems[i];
        }
      }
      if(mapPin) {
        mapPin.classList.add('active');
      }
      //btn watch link edit
      document.querySelector('.main-map .watch-online-btn').href = `../../pages/zoos/${this.activeItemData}.html`;
      console.log(document.querySelector('.main-map .watch-online-btn').href = `../../pages/zoos/${this.activeItemData}.html`);
    };
    onMapItemClick= () => {
      let matchingToMapItemIndex;
      this.activeItemData = event.currentTarget.dataset.name;
      for(let i = 0; i < this.slides.length; i++) {
        if(this.slides[i].dataset.name ===  this.activeItemData) {
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