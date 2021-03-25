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



//todo:
