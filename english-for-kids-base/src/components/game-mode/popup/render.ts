const getPopup = (isWin: boolean, mistakes?: number): string => (`
  <div id="popup" class="popup">
    <div class="popup-title">
      <h2>${isWin ? 'Congradulations! You Won!' : 'Too bad'}</h2>
    </div>
    <div class="popup-inner">
      <span>${isWin ? '' : `You made ${mistakes} mistakes`}</span>
      <img src='../../../assets/${isWin ? 'win-image.jpeg' : 'lose-image.png'}' alt="">
    </div>
  </div>
`);

export const renderPopup = (isWin: boolean, mistakes?: number): void => {
  document.body.insertAdjacentHTML('afterbegin', getPopup(isWin, mistakes));
}

export const removePopup = (): void => {
  const popup = document.getElementById('popup');
  popup?.remove();
}