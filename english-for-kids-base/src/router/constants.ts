import { categoriesListConfig } from "../components/main-page/categories-config";

export const MAIN_ROUTE = 'main';
export const CATEGORY_ROUTE = 'category';
export const STATISTICS_ROUTE = 'statistics';
export const ADMIN_ROUTE = 'admin';

export const MENU_ITEMS: MenuItems  = {
  [MAIN_ROUTE]: {
    name: 'Main'
  },
  [CATEGORY_ROUTE]: {
    name: 'Category',
    subcategory: categoriesListConfig,
  },
  [STATISTICS_ROUTE]: {
    name: 'Statistics',
  }
}