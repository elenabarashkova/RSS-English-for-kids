import { startGameBehavior } from "./game-behavior";
import { getGameDuration, startMainTimer, stopTimer } from "./timers/main-timer";
import { startPreGameTimer, stopPreGameTimer } from "./timers/pre-game-timer";
import { countScore } from "./score-count";
import { startWinPopup } from "./win-popup/render-win-popup";
import { addScores } from "../../common/indexedDB";
import { DEFAULT_PAGE, PAGES_ID } from "../../header/constants";

const GAME_BTN_ID = 'gameTumblerBtn';
let isGameStarted = false;

const changeGameBtn = () => {
  const btn = document.getElementById(GAME_BTN_ID);

  const [label, href] = isGameStarted
    ? ['Stop Game', DEFAULT_PAGE]
    : ['Start Game', PAGES_ID.GAME];

  (btn as HTMLElement).innerText = label;
  (btn as HTMLLinkElement).href = `#${ href }`
}

export const stopGame = (): void => {
  if (isGameStarted) {
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

const onEndGame = (): void => {
  stopTimer();
  const score = countScore();
  const gameDuration = getGameDuration();
  addScores(score, () => {
    startWinPopup(gameDuration, score);
  });
}

const startGame = () => {
  unflipCards();
  startMainTimer();
  startGameBehavior(onEndGame);
}

export const gamePageBehavior = (): void => {
  isGameStarted = true;
  startPreGameTimer(startGame);
  changeGameBtn();
}