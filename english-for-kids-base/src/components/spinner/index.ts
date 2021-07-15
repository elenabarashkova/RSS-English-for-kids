export const renderSpinner = (): void => {
  const html = (`
    <div id="spinnerWrap">
      <div class="spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  `);

  document.body.insertAdjacentHTML('beforeend', html);
}

export const removeSpinner = (): void => {
  const spinner = document.getElementById('spinnerWrap');
  spinner?.remove();
}