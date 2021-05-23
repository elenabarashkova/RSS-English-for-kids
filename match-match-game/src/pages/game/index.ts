import { addPageHtml, setActiveMenuItem } from "../../common/shared";
import { renderGameBoard } from "./render-board";
import { startGame } from "./game-behavior";
import {stopTimer} from "./timer";

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

export const startGamePage = ():void => {
  setActiveMenuItem(GAME_BTN_ID);
  addPageHtml(GAME_HTML);
  renderGameBoard();
  startGame();
  isGameStarted = true;
  // todo:start timer
}