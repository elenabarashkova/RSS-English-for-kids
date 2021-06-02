export const renderWinnersPage = ():void => {
  const html = (`
    <div id="winnersPage" class="winners">
      <h2>Winners</h2>
    </div>
  `);
  document.body?.insertAdjacentHTML('beforeend', html);
}

export const removeWinnersPage = ():void => {
  const winnersPage = document.getElementById('winnersPage');
  winnersPage?.remove();
}