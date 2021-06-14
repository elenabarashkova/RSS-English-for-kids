const renderPopup = (name: string, time: number) => (`
  <div id="raceWinner" class="popup">
    <button id="btnClose">X</button>
    <div class="popup-title">
      <h2>Car ${name} won!</h2>
    </div>
    <div class="popup-inner">
      Time: ${time} seconds.
    </div>
  </div>
`);

export const removePopup = () => {
  const popup = document.getElementById('raceWinner');

  if(popup) {
    popup.remove();
  }
}

export const startPopup = (name: string, time: number) => {
  document.getElementById('main')?.insertAdjacentHTML('beforeend', renderPopup(name, time));

  const closeBtn = document.getElementById('btnClose');

  closeBtn?.addEventListener('click', () => {
    removePopup();
  })
}