import { renderPopup } from "../../../popup/render-popup";
import { initializeClosing } from "../../../popup/popup";
import { PAGES_ID } from "../../../header/constants";

const content = (`
  <div class="win-info">
    You successfully found all matches on 
    <span id="gameDuration"></span>. 
    Your score is 
    <b><span id="gameScore"></span></b>.
  </div> 
  <a href=#${ PAGES_ID.BEST_SCORE } id="winBtn" class="btn">Ok</a>
`);

const winContent = {
  title: 'Congratulations!',
  id: 'winPopup',
  className: 'win-popup',
  content,
};

export const winPopup = renderPopup(winContent);

export const startWinPopup = (gameDuration: string, score: number): void => {
  const body = document.querySelector('body');
  body?.classList.add('popup-on');

  document.getElementById('winPopup')?.classList.add('active');

  document.getElementById('winBtn')?.addEventListener('click', initializeClosing);

  const gameDurationText = document.getElementById('gameDuration');
  if (gameDurationText) {
    gameDurationText.innerText = gameDuration;
  }

  const gameScoreText = document.getElementById('gameScore');
  if (gameScoreText) {
    gameScoreText.innerText = `${ score }`;
  }
}

