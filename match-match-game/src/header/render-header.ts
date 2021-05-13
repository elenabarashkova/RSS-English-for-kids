import {aboutGameId, startAboutGamePage} from "../pages/about-game/about-game";
import { startBestScorePage, bestScoreId } from "../pages/best-score/best-score";
import { startSettingsPage, settingsId } from "../pages/settings/settings";
import { startGamePage, gameId } from "../pages/game/game";


const ROUTE_ALIASES = {
  [aboutGameId as string]: startAboutGamePage,
  [bestScoreId as string]: startBestScorePage,
  [settingsId as string]: startSettingsPage,
  [gameId as string]: startGamePage,
}

function onHashChange() {
  const route = window.location.hash.slice(1);
  const myFn = ROUTE_ALIASES[route] || startAboutGamePage;
  myFn();
}

window.addEventListener("hashchange", onHashChange);
onHashChange();
