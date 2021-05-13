import { setActiveMenuItem, addPageHtml } from "../../common/shared";

const ABOUT_GAME_HTML = '<div>About game</div>';
export const ABOUT_GAME_ID = 'about_game';

export function startAboutGamePage() {
  setActiveMenuItem(ABOUT_GAME_ID);
  window.location.hash = ABOUT_GAME_ID;
  addPageHtml(ABOUT_GAME_HTML);
}
