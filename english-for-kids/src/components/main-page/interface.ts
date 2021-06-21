interface Category {
  name: string,
  imageUrl: string,
}

interface CategoriesListConfig extends Record<string, Category> {}