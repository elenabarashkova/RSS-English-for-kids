import {addPageHtml, setActiveMenuItem} from "../../common/shared";
import {bestScorePageHtml, renderBestScore} from "./render-best-score";

const bestScoreIconLink = require('../../assets/best-score-icon.svg');

export const BEST_SCORE_NAME = 'Best Score';
const BEST_SCORE_HTML = bestScorePageHtml();
export const BEST_SCORE_ID = 'best_score';
export const bestScoreIcon = bestScoreIconLink;

export const startBestScorePage = ():void => {
  setActiveMenuItem(BEST_SCORE_ID);
  addPageHtml(BEST_SCORE_HTML);
  renderBestScore();

}