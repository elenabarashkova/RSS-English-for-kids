import { mainHtml, setActiveMenuItem } from "../../shared";

const gameHtml = '<div>Game field</div>';
export const gameId = 'game';
const gameBtnId = 'gameTumblerBtn'

export function startGamePage() {
  setActiveMenuItem(gameBtnId);
  if(mainHtml) {
    mainHtml.innerHTML = gameHtml;
  }
}