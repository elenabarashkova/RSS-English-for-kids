import {addPageHtml, insertHtml, setActiveMenuItem} from "../../common/shared";
import { renderGameBoard } from "./render-board/render-board";
import { startGameBehavior } from "./game-behavior";
import {startMainTimer, stopTimer, getGameDuration} from "./timers/main-timer";
import {startPreGameTimer, stopPreGameTimer} from "./timers/pre-game-timer";
import { ABOUT_GAME_ID } from "../about-game/about-game";
import {countScore} from "./score-count";
import {startWinPopup} from "./win-popup/render-win-popup";

const GAME_HTML = '<div id="gameBoard" class="board"></div>';
export const GAME_ID = 'game';
const GAME_BTN_ID = 'gameTumblerBtn';
let isGameStarted = false;

const changeGameBtn = () => {
  const btn = document.getElementById(GAME_BTN_ID);
  if(isGameStarted && btn) {
    btn.innerText = 'Stop Game';
    (btn as HTMLLinkElement).href = `#${ABOUT_GAME_ID}`;
  }
  else if(!isGameStarted && btn) {
    btn.innerText = 'Start Game';
    (btn as HTMLLinkElement).href = `#${GAME_ID}`;
  }
}

export const stopGame = ():void => {
  if(isGameStarted) {
    stopTimer();
    stopPreGameTimer();
    isGameStarted = false;
  }
  changeGameBtn();
}

const unflipCards = () => {
  const cards = document.getElementsByClassName('card');
  [...cards].map(item => item.classList.remove('flip'));
}

const onEndGame = ():void => {
  stopTimer();
  const score = countScore();
  const gameDuration = getGameDuration();
  startWinPopup(gameDuration, score);
}

const startGame = () => {
  unflipCards();
  startMainTimer();
  startGameBehavior(onEndGame);
}

export const startGamePage = ():void => {
  setActiveMenuItem(GAME_BTN_ID);
  addPageHtml(GAME_HTML);
  renderGameBoard();
  isGameStarted = true;
  startPreGameTimer(startGame);
  changeGameBtn();

  // when game ends
  //    ++countScore()
  //    popupCongrads()
  //    save score to indexedDb
  //    startBestScorePage()
  //
}