import {addPageHtml, setActiveMenuItem} from "../../common/shared";

const GAME_HTML = '<div>Game field</div>';
export const GAME_ID = 'game';
const GAME_BTN_ID = 'gameTumblerBtn'

export function startGamePage() {
  setActiveMenuItem(GAME_BTN_ID);
  addPageHtml(GAME_HTML);
}