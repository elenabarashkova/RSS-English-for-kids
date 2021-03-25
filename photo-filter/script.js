// Filters

let root = document.querySelector(':root');
function changeFilterValue(target, value) {
  let filterName = target.getAttribute('name'); //exp.output: blur
  let units = '';
  switch(filterName) {
    case 'blur':
      units = 'px';
      break;
    case 'invert':
      units = '%';
      break;
    case 'sepia':
      units = '%';
      break;
    case 'saturate':
      units = '%';
      break;
    case 'hue':
      units = 'deg';
      break;
  }
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


//todo:
