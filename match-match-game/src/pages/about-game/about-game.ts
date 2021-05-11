import { setActiveMenuItem, addPageHtml } from "../../shared";

const aboutGameHtml = '<div>About game</div>';
export const aboutGameId = 'about_game';

export function startAboutGamePage() {
  setActiveMenuItem(aboutGameId);
  window.location.hash = aboutGameId;
  addPageHtml(aboutGameHtml);
}
