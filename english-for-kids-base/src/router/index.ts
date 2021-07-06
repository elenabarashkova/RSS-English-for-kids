import { PAGES_CONFIG } from "./pages-config";
import { clearMain, getHash, redirectToDefaultPage } from "../shared";
import { mistakesCountAction, setCurrentCategoryAction, setCurrentPageAction, stopGameAction } from "../redux/actions";
import { setActiveMenuItem } from "../components/menu";

const onHashChange = (): void => {
  stopGameAction();
  mistakesCountAction(false);

  clearMain();

  const [route, innerRoute] = getHash();

  if (!PAGES_CONFIG[route]) {
    redirectToDefaultPage();
    return;
  }

  PAGES_CONFIG[route]();

  setActiveMenuItem(innerRoute || route);

  setCurrentPageAction(route);
  setCurrentCategoryAction(innerRoute || null);
}

export const startRouter = (): void => {
  window.addEventListener('hashchange', onHashChange);

  onHashChange();
}