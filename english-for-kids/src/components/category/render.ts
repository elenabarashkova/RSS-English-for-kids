import { getWordCard } from "../card/render";

export const getCategoryInner = (currentCategoryWords: WordsListConfig): string => (`
  <div class="stars-container">
    <div id="starsWrap" class="stars-wrap"></div>
  </div>
  <div class="category-page card-wrap">
    ${currentCategoryWords.map((word: Word) => getWordCard(word)).join('')}
  </div>
  <div id="gameBtnsWrap"></div>
`)