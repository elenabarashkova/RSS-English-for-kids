import { categoriesListConfig } from "../components/main-page/categories-config";

export const ROUTES: Routes = {
  MAIN: {
    url: 'main',
    name: 'Main'
  },
  CATEGORY: {
    url: 'category',
    name: 'Category',
    subcategory: categoriesListConfig,
  },
  STATISTICS: {
    url: 'statistics',
    name: 'Statistics',
  }
}