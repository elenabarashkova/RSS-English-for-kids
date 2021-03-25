// Filters

let filtersWrap = document.querySelector('.filters');
filtersWrap.addEventListener('input', (event) => {
  let targetOutput = event.target.nextElementSibling;
  targetOutput.value = event.target.value;
});



//todo: на клик и mouseover визуальные эффекты у range и output
