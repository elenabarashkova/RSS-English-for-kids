import { getWordCard } from "../card/render";

export const getCategoryInner = (currentCategoryWords: WordsListConfig): string => (`
  <div id="starsWrap" class="stars-wrap"></div>
  <div class="category-page card-wrap">
    ${currentCategoryWords.map((word: Word) => getWordCard(word)).join('')}
  </div>
  <button id="startGameBtn" class="game-btn start-game-btn">Start Game</button>
  <button id="repeatWordBtn" class="game-btn repeat-word-btn"></button>
`)