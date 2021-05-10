import { mainHtml } from "../../shared";
import { setActiveMenuItem } from "../../header";
import {bestScoreId} from "../best-score/best-score";

const gameHtml = '<div>Game field</div>';
export const gameId = 'game';
const gameBtnId = 'gameTumblerBtn'

export function startGamePage() {
  setActiveMenuItem(gameBtnId);
  if(mainHtml) {
    mainHtml.innerHTML = gameHtml;
  }
}