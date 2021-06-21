import { startCategoryPage, stopCategoryPage } from "../components/category";
import { startMainPage, stopMainPage } from "../components/main-page";
import { ROUTES } from "./constants";

export const PAGES_CONFIG = {
  [ROUTES.MAIN]: {
    start: startMainPage,
    stop: stopMainPage,
  },
  [ROUTES.CATEGORY]: {
    start: startCategoryPage,
    stop: stopCategoryPage,
  },
}
