import { initAboutPage } from "../pages/about-game/render-about-page";
import { initBestScore } from "../pages/best-score/render-best-score";
import { initSettingsPage } from "../pages/settings/render-settings";
import { initGameBoard } from "../pages/game/render-board/render-board";
import { PAGES_ID } from "../header/constants";

export const PAGES_CONFIG = {
  [PAGES_ID.ABOUT_GAME]: initAboutPage,
  [PAGES_ID.BEST_SCORE]: initBestScore,
  [PAGES_ID.SETTINGS]: initSettingsPage,
  [PAGES_ID.GAME]: initGameBoard,
}