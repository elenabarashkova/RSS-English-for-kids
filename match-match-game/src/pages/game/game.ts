import {addPageHtml, setActiveMenuItem} from "../../common/shared";

const gameHtml = '<div>Game field</div>';
export const gameId = 'game';
const gameBtnId = 'gameTumblerBtn'

export function startGamePage() {
  setActiveMenuItem(gameBtnId);
  addPageHtml(gameHtml);
}