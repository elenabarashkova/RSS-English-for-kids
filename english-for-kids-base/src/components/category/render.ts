import { getWordCard } from "../card/render";
import { ServerWord, ServerWordList } from "../admin-panel/types";

export const getCategoryInner = (currentCategoryWords: ServerWordList): string => (`
  <div class="stars-container">
    <div id="starsWrap" class="stars-wrap"></div>
  </div>
  <div class="category-page card-wrap">
    ${currentCategoryWords.map((word: ServerWord) => getWordCard(word)).join('')}
  </div>
  <div id="gameBtnsWrap"></div>
`)