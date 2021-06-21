import { PAGES_CONFIG } from "./pages-config";
import { clearMain, redirectToDefaultPage } from "../shared";

const onHashChange = (event: HashChangeEvent | null): void => {
  clearMain();

  const oldUrl = event?.oldURL.split('#')[1];

  if(oldUrl) {
    const oldRoute = oldUrl.split('/')[0];
    PAGES_CONFIG[oldRoute]?.stop();
  }

  const route = window.location.hash.slice(1).split('/')[0];

  if (!PAGES_CONFIG[route]) {
    redirectToDefaultPage();
    return;
  }

  PAGES_CONFIG[route].start();
}

export const startRouter = (): void => {
  window.addEventListener('hashchange', onHashChange);
  onHashChange(null);
}