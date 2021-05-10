import { startAboutGamePage} from "./pages/about-game/about-game";
import { startBestScorePage, bestScoreId } from "./pages/best-score/best-score";
import { startSettingsPage, settingsId } from "./pages/settings/settings";
import { startGamePage, gameId } from "./pages/game/game";

function onHashChange() {
  const currentId = window.location.hash.slice(1);
  switch (currentId) {
    case bestScoreId:
      startBestScorePage();
      break;
    case settingsId:
      startSettingsPage();
      break;
    case gameId:
      startGamePage();
      break;
    default:
      startAboutGamePage();
      break;
  }
}

window.addEventListener("hashchange", onHashChange);
onHashChange();
