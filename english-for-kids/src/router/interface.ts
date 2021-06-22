interface Route {
  url: string,
  name: string,
  subcategory?: CategoriesListConfig,
}

interface Routes extends Record<string, Route> {}