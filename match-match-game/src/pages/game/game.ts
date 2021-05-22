import { addPageHtml, setActiveMenuItem } from "../../common/shared";
import { renderGameBoard } from "./render-board";
import { startGame } from "./game-behavior";

const GAME_HTML = '<div id="gameBoard" class="board"></div>';
export const GAME_ID = 'game';
const GAME_BTN_ID = 'gameTumblerBtn'

export const startGamePage = () => {
  setActiveMenuItem(GAME_BTN_ID);
  addPageHtml(GAME_HTML);
  renderGameBoard();
  startGame();
}