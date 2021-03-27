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
  //debugger;
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
  //debugger;
  let timeOfDay = detectDayTime (hours);
  let pictureNum = pictureNumGenerator(num);
  imagePlace.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${pictureNum}.jpg`;
  num === 20 ? num = 1 : num += 1;
});

//todo:
//https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/18.jpg
//с 6:00 до 11:59 - morning
//с 12:00 до 17:59 - day
//с 18:00 до 23:59 - evening
//с 00:00 до 5:59 - night
