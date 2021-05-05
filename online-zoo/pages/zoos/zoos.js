window.addEventListener('load', function() {
  let mainVideoIframe = document.querySelector('.broadcast-main iframe');
  const smallVideos = document.getElementsByClassName('broadcast-slide');
  let clickedVideo;
  for(let i = 0; i < smallVideos.length; i++) {
    smallVideos[i].addEventListener('click', onVideoClick);
  }
  function onVideoClick(event) {
    clickedVideo = event.currentTarget;
    //debugger;
    //console.log('event.currentTarget '+event.currentTarget);
    mainVideoIframe = document.querySelector('.broadcast-main iframe');
    let smallVideoIframe = clickedVideo.querySelector('.broadcast-slide-inner iframe');
    //console.log('smallVideoIframe '+smallVideoIframe);
    let swap = mainVideoIframe.src.replace('?autoplay=1', '');
    mainVideoIframe.src = smallVideoIframe.src + '?autoplay=1';
    smallVideoIframe.src = swap;
  }
});