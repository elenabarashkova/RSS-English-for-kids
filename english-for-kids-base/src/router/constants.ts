export const MAIN_ROUTE = 'main';
export const CATEGORY_ROUTE = 'category';
export const STATISTICS_ROUTE = 'statistics';
export const ADMIN_ROUTE = 'admin';
export const ADMIN_ROUTE_WORDS = 'words';

export const MENU_ITEMS: MenuItems  = {
  [MAIN_ROUTE]: {
    name: 'Main'
  },
  [CATEGORY_ROUTE]: {
    name: 'Category',
    subcategory: true,
  },
  [STATISTICS_ROUTE]: {
    name: 'Statistics',
  }
}