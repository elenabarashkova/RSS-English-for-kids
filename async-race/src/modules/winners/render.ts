export const renderWinnersPage = ():void => {
  const html = (`
    <div id="winnersPage" class="winners">
      <h2>Winners</h2>
    </div>
  `);

  document.getElementById('main')?.insertAdjacentHTML('beforeend', html);
}