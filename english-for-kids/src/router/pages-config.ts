import { startCategoryPage } from "../components/category";
import { startMainPage } from "../components/main-page";
import { ROUTES } from "./constants";

export const PAGES_CONFIG = {
  [ROUTES.MAIN.url]: startMainPage,
  [ROUTES.CATEGORY.url]: startCategoryPage,
}
