import { ABOUT_GAME_ID, startAboutGamePage } from "../pages/about-game/about-game";
import {BEST_SCORE_ID, startBestScorePage } from "../pages/best-score/best-score";
import {SETTINGS_ID, startSettingsPage } from "../pages/settings/settings";
import { GAME_ID, startGamePage } from "../pages/game/game";

const ROUTE_ALIASES = {
  [ABOUT_GAME_ID as string]: startAboutGamePage,
  [BEST_SCORE_ID as string]: startBestScorePage,
  [SETTINGS_ID as string]: startSettingsPage,
  [GAME_ID as string]: startGamePage,
}

const onHashChange = () => {
  const route = window.location.hash.slice(1);
  const myFn = ROUTE_ALIASES[route] || startAboutGamePage;
  myFn();
}

export const startRouter = () => {
  window.addEventListener("hashchange", onHashChange);
  onHashChange();
}

// todo: rename fn