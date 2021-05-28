import { initializeClosing } from "../../../popup/popup";
import { PAGES_ID } from "../../../header/constants";

export const winPopup = (gameDuration: string, score: number):string => (`
  <div id='winPopup' class="popup win-popup active">
    <div class="popup-wrap">
      <button class="btn-close">X</button>
      <div class="popup-title">
        <h2>Congratulations!</h2>
      </div>
      <div class="popup-inner">
        <div class="win-info">
          You successfully found all matches on <span id="gameDuration">${gameDuration}</span>. 
          Your score is <b><span id="gameScore">${score}</span></b>.
        </div> 
        <a href=#${ PAGES_ID.BEST_SCORE } id="winBtn" class="btn">Ok</a>
      </div>
    </div>
  </div>
`);

export const startWinPopup = (): void => {
  document.getElementById('winBtn')?.addEventListener('click', initializeClosing);
}

