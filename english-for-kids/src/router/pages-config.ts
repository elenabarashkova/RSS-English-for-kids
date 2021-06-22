import { startCategoryPage, stopCategoryPage } from "../components/category";
import { startMainPage, stopMainPage } from "../components/main-page";
import { ROUTES } from "./constants";

export const PAGES_CONFIG = {
  [ROUTES.MAIN.url]: {
    start: startMainPage,
    stop: stopMainPage,
  },
  [ROUTES.CATEGORY.url]: {
    start: startCategoryPage,
    stop: stopCategoryPage,
  },
}
