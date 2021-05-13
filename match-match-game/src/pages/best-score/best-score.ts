import {addPageHtml, setActiveMenuItem} from "../../common/shared";

const bestScoreHtml = '<div>Best score</div>';
export const bestScoreId = 'best_score';

export function startBestScorePage() {
  setActiveMenuItem(bestScoreId);
  addPageHtml(bestScoreHtml);
}