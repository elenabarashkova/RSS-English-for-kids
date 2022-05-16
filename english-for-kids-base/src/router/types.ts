interface MenuItem {
  name: string,
  subcategory?: boolean,
}

interface MenuItems extends Record<string, MenuItem> {}

type PagesConfig = Record<string, CallableFunction>;