import { setActiveMenuItem, addPageHtml } from "../../common/shared";
import {aboutPageHtml, renderInstructionsItems} from "./render-about-page";

const aboutGameIconLink = require('../../assets/about-game-icon.svg');

export const ABOUT_GAME_NAME = 'About Game';
const ABOUT_GAME_HTML = aboutPageHtml();
export const ABOUT_GAME_ID = 'about_game';
export const aboutGameIcon = aboutGameIconLink;

export const startAboutGamePage = ():void => {
  setActiveMenuItem(ABOUT_GAME_ID);
  window.location.hash = ABOUT_GAME_ID;
  addPageHtml(ABOUT_GAME_HTML);
  renderInstructionsItems();
}
