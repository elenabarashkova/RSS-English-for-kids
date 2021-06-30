interface MenuItem {
  name: string,
  subcategory?: CategoriesListConfig,
}

interface MenuItems extends Record<string, MenuItem> {}

type PagesConfig = Record<string, CallableFunction>;