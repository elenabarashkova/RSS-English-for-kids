import { mainHtml } from "../../shared";
import { setActiveMenuItem } from "../../header";

const bestScoreHtml = '<div>Best score</div>';
export const bestScoreId = 'best_score';

export function startBestScorePage() {
  setActiveMenuItem(bestScoreId);
  if(mainHtml) {
    mainHtml.innerHTML = bestScoreHtml;
  }
}