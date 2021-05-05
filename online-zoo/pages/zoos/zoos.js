window.addEventListener('load', function() {
  let mainVideoIframe = document.querySelector('.broadcast-main iframe');
  const smallVideos = document.getElementsByClassName('broadcast-slide');
  let clickedVideo;
  for(let i = 0; i < smallVideos.length; i++) {
    smallVideos[i].addEventListener('click', onVideoClick);
  }
  function onVideoClick(event) {
    clickedVideo = event.currentTarget;
    mainVideoIframe = document.querySelector('.broadcast-main iframe');
    let smallVideoIframe = clickedVideo.querySelector('.broadcast-slide-inner iframe');
    let swap = mainVideoIframe.src.replace('?autoplay=1', '');
    mainVideoIframe.src = smallVideoIframe.src + '?autoplay=1';
    smallVideoIframe.src = swap;
  }
  //ASIDE
  class AsideSlider extends Slider {
    constructor(params) {
      super(params);
      this.activeItemData = 'panda';
      this.slideHeight = this.slides[1].offsetHeight + parseInt(window.getComputedStyle(this.slides[0]).marginTop) + parseInt(window.getComputedStyle(this.slides[0]).marginBottom);
      //call
      for(let i = 0; i < this.slides.length; i ++) {
        this.slides[i].addEventListener('click', this.onSlideClickMap);
      }
    };
    applySliderInnerStyles() {
      this.sliderInner.setAttribute('style', `top: ${-this.slideHeight * (this.activeIndex - this.shownSlideIndex)}px`);
    };
    initPagination() {};
    setSlidesAmount() {};
    setOutputAndPaginationValue() {};
  }

  const asideParams = {
    element: document.querySelector('.aside-slider'),
    activeIndex: window.activeAnimalAside || 0,
    slidersShownNum: 4,
    activeOnClick: true,
    slides: 'aside-slide',
    sliderInner: '.aside-slider-inner',
  };
  const asideSlider = window.asideSlider = new AsideSlider(asideParams);
});