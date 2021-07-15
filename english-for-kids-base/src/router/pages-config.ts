import { startCategoryPage } from "../components/category";
import { startMainPage } from "../components/main-page";
import { MAIN_ROUTE, CATEGORY_ROUTE, ADMIN_ROUTE, ADMIN_ROUTE_WORDS } from "./constants";
// import { startStatisticsPage } from "../components/statistics";
import { startAdminCategoriesPage } from "../components/admin-panel/category";
import { startAdminWordsPage } from "../components/admin-panel/word";

export const PAGES_CONFIG: PagesConfig = {
  [MAIN_ROUTE]: startMainPage,
  [CATEGORY_ROUTE]: startCategoryPage,
  // [STATISTICS_ROUTE]: startStatisticsPage,
  [ADMIN_ROUTE]: startAdminCategoriesPage,
  [ADMIN_ROUTE_WORDS]: startAdminWordsPage,
}