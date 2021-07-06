import { startCategoryPage } from "../components/category";
import { startMainPage } from "../components/main-page";
import { MAIN_ROUTE, CATEGORY_ROUTE, STATISTICS_ROUTE } from "./constants";
import { startStatisticsPage } from "../components/statistics";

export const PAGES_CONFIG: PagesConfig = {
  [MAIN_ROUTE]: startMainPage,
  [CATEGORY_ROUTE]: startCategoryPage,
  [STATISTICS_ROUTE]: startStatisticsPage,
}
