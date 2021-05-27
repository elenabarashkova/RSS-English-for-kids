import {stopGame} from "../pages/game";
import {DEFAULT_PAGE } from "./constants";
import {PAGES_CONFIG} from "../common/pages-config";

const setActiveMenuItem = (itemId: string):void => {
  const MENU_ITEMS: HTMLCollection = document.getElementsByClassName('menu-item');

  [...MENU_ITEMS].forEach(item => item.classList.remove('active'));
  document.getElementById(itemId)?.classList.add('active');
}

const onHashChange = () => {
  let route = window.location.hash.slice(1);

  if (!PAGES_CONFIG[route]) {
    window.location.hash = DEFAULT_PAGE;
    route = DEFAULT_PAGE;
  }

  stopGame();

  setActiveMenuItem(route);

  PAGES_CONFIG[route].render();
  const {behavior} = PAGES_CONFIG[route];
  if (behavior) {
    behavior();
  }
}

export const startRouter = (): void => {
  window.addEventListener("hashchange", onHashChange);
  onHashChange();
}
