import {renderAboutPage} from "../pages/about-game/render-about-page";
import {renderBestScore} from "../pages/best-score/render-best-score";
import {rendersettingsPage} from "../pages/settings/render-settings";
import {settingsBehavior} from "../pages/settings";
import {renderGameBoard} from "../pages/game/render-board/render-board";
import {gamePageBehavior} from "../pages/game";
import {PAGES_ID} from "../header/constants";

export const PAGES_CONFIG = {
  [PAGES_ID.ABOUT_GAME] : {
    render: renderAboutPage,
    behavior: null,
  },
  [PAGES_ID.BEST_SCORE] : {
    render: renderBestScore,
    behavior: null,
  },
  [PAGES_ID.SETTINGS] : {
    render: rendersettingsPage,
    behavior: settingsBehavior,
  },
  [PAGES_ID.GAME] : {
    render: renderGameBoard,
    behavior: gamePageBehavior,
  },
}