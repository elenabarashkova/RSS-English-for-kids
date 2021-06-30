import { startCategoryPage } from "../components/category";
import { startMainPage } from "../components/main-page";
import { MAIN_ROUTE, CATEGORY_ROUTE } from "./constants";

export const PAGES_CONFIG: PagesConfig = {
  [MAIN_ROUTE]: startMainPage,
  [CATEGORY_ROUTE]: startCategoryPage,
}
