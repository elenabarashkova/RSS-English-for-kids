export const renderWinnersPage = ():void => {
  const html = (`
    <div id="winnersPage" class="winners" xmlns="http://www.w3.org/1999/html">
      <div class="winners-area">
        <h2>Winners (<span id="winnersLength"></span>)</h2>
        <div class="page-number">Page #<span id="pageNumWinners"></span></div>
        <div class="winners-area-inner">
          <div id="winnersHeader" class="winners-header">
            <div id="winnerNumberBtn" class="winners-header-item">Number</div>
            <div id="winnerPicBtn" class="winners-header-item">Car</div>
            <div id="winnerNameBtn" class="winners-header-item">Name</div>
            <button id="winnerWinsNumBtn" class="winners-header-item">Wins</button>
            <button id="winnerTimeBtn" class="winners-header-item">Best time (seconds)</button>
          </div>
          <div id="winnersList" class="winners-wrap"></div>
        </div>
        <button id="prevPageWinners">Previous</button>
        <button id="nextPageWinners">Next</button>
      </div>
    </div>
  `);

  document.getElementById('main')?.insertAdjacentHTML('beforeend', html);
}

const carIcon = require("../../assets/car-icon.svg");

export const renderWinner = ({id, wins, time, name, color}:WinnerItem):string => (`
  <div class="winner-item" data-id=${id}>
    <span class="winner-number">INDEX</span>
    <span class="winner-picture" style="color: ${color}">${carIcon}</span>
    <span class="winner-name">${name}</span>
    <span class="winner-wins-number">${wins}</span>
    <span class="winner-time">${time}</span>
  </div>
`);

export const renderWinnersList = (winnersList: WinnersList):void => {
  const winnersListElement = document.getElementById('winnersList') as HTMLElement;

  winnersListElement.innerHTML = '';

  winnersList.forEach((winner: WinnerItem) => (
    winnersListElement?.insertAdjacentHTML('beforeend', renderWinner(winner)))
  );
}

export const insertWinnersCount = (winnersListLength: number):void => {
  (document.getElementById('winnersLength') as HTMLElement).innerText = `${winnersListLength}`;
}