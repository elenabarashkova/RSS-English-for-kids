import { getMenu } from "./menu/get-menu";
import { openMenu } from "./menu";
import { getGameModeBtn } from "./game-mode/game-mode-toggle/render";
import { gameModeBtnBehavior } from "./game-mode/game-mode-toggle";
import { initLogin } from "./login";
import { getFooter, getMain } from "./render";
import { getCategories } from "../server/categories";
import store from "../redux/store";
import { GAME_MODES } from "../shared/constants";

export const initCommonPageTemplate = (): void => {
  const container = document.createElement('div');
  container.classList.add('container');
  container.id = ('container');

  document.body.appendChild(container);

  container.insertAdjacentHTML('beforeend', getMain());
  document.body.insertAdjacentHTML('beforeend', getFooter());
}

export const initPublicPageTemplate = (): void => {
  const container = document.getElementById('container');
  container?.insertAdjacentHTML('afterbegin', getMenu());

  const main = document.getElementById('main');

  const isTrainMode = store.getState().game.gameMode === GAME_MODES.TRAIN;
  main?.insertAdjacentHTML('afterbegin', getGameModeBtn(isTrainMode));

  openMenu();
  initLogin();
  gameModeBtnBehavior();

  getCategories();
}

export const stopPublicPageTemplate = (): void => {
  document.getElementById('menu')?.remove();
  document.getElementById('gameModeTogglBtn')?.remove();
}