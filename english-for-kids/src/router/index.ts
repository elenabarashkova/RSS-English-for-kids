import { PAGES_CONFIG } from "./pages-config";
import { clearMain, redirectToDefaultPage } from "../shared";
import { setCurrentPageAction, stopGameAction } from "../redux/actions";
import { setActiveMenuItem } from "../components/menu";

const onHashChange = (event: HashChangeEvent | null): void => {
  stopGameAction();
  clearMain();

  const oldUrl = event?.oldURL.split('#')[1];

  if(oldUrl) {
    const oldRoute = oldUrl.split('/')[0];
    PAGES_CONFIG[oldRoute]?.stop(); // -> in case stop behavior will be added for each page
  }

  const route = window.location.hash.slice(1).split('/')[0];
  const innerRoute = window.location.hash.slice(1).split('/')[1];

  if (!PAGES_CONFIG[route]) {
    redirectToDefaultPage();
    return;
  }

  PAGES_CONFIG[route].start();

  if(innerRoute) {
    setActiveMenuItem(innerRoute);
  } else {
    setActiveMenuItem(route);
  }

  setCurrentPageAction(route);
}

export const startRouter = (): void => {
  window.addEventListener('hashchange', onHashChange);

  onHashChange(null);
}