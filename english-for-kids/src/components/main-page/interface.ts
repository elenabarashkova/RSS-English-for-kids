interface Category {
  name: string,
  imageUrl: string,
  wordsConfig: WordsListConfig,
}

interface CategoriesListConfig extends Record<string, Category> {}