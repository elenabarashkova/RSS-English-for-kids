import {addPageHtml, setActiveMenuItem} from "../../common/shared";

const bestScoreIconLink = require('../../assets/best-score-icon.svg');

export const BEST_SCORE_NAME = 'Best Score';
const BEST_SCORE_HTML = '<div>Best score</div>';
export const BEST_SCORE_ID = 'best_score';
export const bestScoreIcon = bestScoreIconLink;

export const startBestScorePage = () => {
  setActiveMenuItem(BEST_SCORE_ID);
  addPageHtml(BEST_SCORE_HTML);
}