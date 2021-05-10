import { mainHtml } from "../../shared";
import { setActiveMenuItem } from "../../header";

const aboutGameHtml = '<div>About game</div>';
export const aboutGameId = 'about_game';

export function startAboutGamePage() {
  setActiveMenuItem(aboutGameId);
  window.location.hash = aboutGameId;
  if(mainHtml) {
    mainHtml.innerHTML = aboutGameHtml;
  }
}