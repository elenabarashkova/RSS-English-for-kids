// Filters

let filtersWrap = document.querySelector('.filters');
filtersWrap.addEventListener('change', (event) => {
  let targetOutput = event.target.nextElementSibling;
  targetOutput.value = event.target.value;
});



//todo: output заполнение на mouseover а не на click
//todo: на клик и mouseover визуальные эффекты у range и output
