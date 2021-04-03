// Global variables

let imagePlace = document.querySelector('img');

// Filters

let root = document.querySelector(':root');
function changeFilterValue(target, value) {
  let filterName = target.getAttribute('name');
  let units = target.dataset.sizing;
  root.style.setProperty('--'+filterName, value+units);
}

let filtersWrap = document.querySelector('.filters');
filtersWrap.addEventListener('input', (event) => {
  let targetOutput = event.target.nextElementSibling;
  targetOutput.value = event.target.value;
  changeFilterValue(event.target, event.target.value);
});

// Reset button

document.querySelector('.btn-reset').onclick = function() {
  let filterInputs = filtersWrap.getElementsByTagName('input');
  let filterOutputs = filtersWrap.getElementsByTagName('output');
  for (const item of filterInputs) {
    if(item.getAttribute('name') === 'saturate') {
      changeFilterValue(item, 100);
      item.value = 100;
    } else {
      changeFilterValue(item, 0);
      item.value = 0;
    }
  }
  for (const item of filterOutputs) {
    if(item.previousElementSibling.getAttribute('name') === 'saturate') {
      item.value = 100;
    } else {
      item.value = 0;
    }
  }
};

// Load picture

let loadBtn = document.querySelector('.btn-load');
loadBtn.addEventListener('change', (event) => {
  let loadImage = document.getElementById('btnInput').files[0];
  imagePlace.src = URL.createObjectURL(loadImage);
});

// Next picture

let today = new Date();
let hours = today.getHours();
function detectDayTime (hours) {
  switch (true) {
    case hours >= 6 && hours < 12:
      return 'morning';
      break;
    case hours >= 12 && hours < 18:
      return 'day';
      break;
    case hours >= 18 && hours < 24:
      return 'evening';
      break;
    case hours >= 24 && hours < 6:
      return 'night';
      break;
  }
}

function pictureNumGenerator(num) {
  if(num === 20) {
    return 20;
  }
  return num.toString().length < 2 ? '0'+(num%20) : (num%20);
}
let num = 1;
document.querySelector('.btn-next').addEventListener('click', function (event) {
  let timeOfDay = detectDayTime (hours);
  let pictureNum = pictureNumGenerator(num);
  imagePlace.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${pictureNum}.jpg`;
  num === 20 ? num = 1 : num += 1;
});


// Save picture

document.querySelector('.btn-save').addEventListener('click', function (event) {
  let canvas = document.createElement('canvas');
  let context = canvas.getContext('2d');
  canvas.width = imagePlace.naturalWidth;
  canvas.height = imagePlace.naturalHeight;
  //find filter's values
  let root = document.querySelector(':root');
  let rootStyles = getComputedStyle(root);
  let blurVariable = rootStyles.getPropertyValue('--blur');
  console.log('blurVariable '+blurVariable);
  let invert = rootStyles.getPropertyValue('--invert');
  let sepia = rootStyles.getPropertyValue('--sepia');
  let saturate = rootStyles.getPropertyValue('--saturate');
  let hue = rootStyles.getPropertyValue('--hue');
  //for blur
  function findBlurMultiplier() {
    if(imagePlace.naturalWidth > imagePlace.naturalHeight) {
      return imagePlace.naturalWidth/imagePlace.width;
    } else {
      return imagePlace.naturalHeight/imagePlace.height;
    }
  }
  let blurMultiplier = findBlurMultiplier();
  console.log('blurMultiplier '+blurMultiplier);
  let blur = (parseInt(blurVariable) * blurMultiplier) + 'px';
  //apply filters
  context.filter = `blur(${blur}) invert(${invert}) sepia(${sepia}) saturate(${saturate}) hue-rotate(${hue})`;
  //draw
  context.drawImage(imagePlace, 0, 0);
  //create link
  canvas.toBlob(function(blob) {
    let linkElement = document.createElement('a');
    linkElement.download = 'photo-filter.png';
    linkElement.href = URL.createObjectURL(blob);
    linkElement.click();
    URL.revokeObjectURL(linkElement.href);
  });
});

// fullscreen

function activateFullscreen(element) {
  if(element.requestFullscreen) {
    element.requestFullscreen();        // W3C spec
  }
  else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen();     // Firefox
  }
  else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();  // Safari
  }
  else if(element.msRequestFullscreen) {
    element.msRequestFullscreen();      // IE/Edge
  }
}
function deactivateFullscreen() {
  if(document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  }
}

document.querySelector('.openfullscreen').onclick = function() {
  if(document.fullscreenElement === null) {
    activateFullscreen(document.documentElement);
  } else {
    deactivateFullscreen();
  }
};
