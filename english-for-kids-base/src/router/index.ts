import { PAGES_CONFIG } from "./pages-config";
import { clearMain, getHash, redirectToDefaultPage } from "../shared";
import {
  isGameStartedAction,
  mistakesCountAction,
  setCurrentCategoryAction,
  setCurrentPageAction,
} from "../redux/actions";
import { setActiveMenuItem } from "../components/menu";
import { ADMIN_ROUTE_WORDS } from "./constants";

const onHashChange = (): void => {
  isGameStartedAction(false);
  mistakesCountAction(false);

  clearMain();

  const [route, innerRoute, adminWordRoute] = getHash();

  setCurrentPageAction(route);
  setCurrentCategoryAction(innerRoute || null);
  setActiveMenuItem(innerRoute || route);

  if (!PAGES_CONFIG[route]) {
    redirectToDefaultPage();
    return;
  }

  if(adminWordRoute) {
    PAGES_CONFIG[ADMIN_ROUTE_WORDS](innerRoute);
    return;
  }

  PAGES_CONFIG[route]();


}

export const startRouter = (): void => {
  window.addEventListener('hashchange', onHashChange);

  onHashChange();
}