import { getWordCard } from "../card/render";

export const getCategoryInner = (currentCategoryWords: WordsListConfig): string => (`
  <div class="category-page card-wrap container">
    ${(Object.keys(currentCategoryWords)).map((word: string) => getWordCard(currentCategoryWords[word])).join('')}
  </div>
`)