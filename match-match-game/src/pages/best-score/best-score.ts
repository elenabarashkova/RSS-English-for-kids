import {addPageHtml, setActiveMenuItem} from "../../common/shared";

const BEST_SCORE_HTML = '<div>Best score</div>';
export const BEST_SCORE_ID = 'best_score';

export function startBestScorePage() {
  setActiveMenuItem(BEST_SCORE_ID);
  addPageHtml(BEST_SCORE_HTML);
}