import { addPageHtml, setActiveMenuItem } from "../../common/shared";
import { renderGameBoard } from "./render-board/render-board";
import { startGameBehavior } from "./game-behavior";
import {startMainTimer, stopTimer} from "./main-timer";
import {startPreGameTimer} from "./pre-game-timer";

const GAME_HTML = '<div id="gameBoard" class="board"></div>';
export const GAME_ID = 'game';
const GAME_BTN_ID = 'gameTumblerBtn';
let isGameStarted = false;

export const stopGame = ():void => {
  if(isGameStarted) {
    stopTimer();
    isGameStarted = false;
  }
}

const unflipCards = () => {
  const cards = document.getElementsByClassName('card');
  [...cards].map(item => item.classList.remove('flip'));
}

const startGame = () => {
  unflipCards();
  startMainTimer();
  startGameBehavior(/* onGameEnd */);
}

export const startGamePage = ():void => {
  setActiveMenuItem(GAME_BTN_ID);
  addPageHtml(GAME_HTML);
  renderGameBoard();
  startPreGameTimer(startGame);

  // todo: add isGameStarted = true;

  // when game ends
  //    const clicks = gameBehavior.getClicks();
  //    const time = mainTimer.getTime();
}