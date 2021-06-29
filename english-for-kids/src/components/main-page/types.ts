interface Category {
  name: string,
  url: string
  imageUrl: string,
  wordsConfig: WordsListConfig,
}

interface CategoriesListConfig extends Record<string, Category> {}