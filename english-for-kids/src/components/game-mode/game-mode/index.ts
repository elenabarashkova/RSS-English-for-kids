import { setCurrentWordAction, setWordsInPlayAction, startGameAction } from "../../../redux/actions";
import { categoriesListConfig } from "../../main-page/categories-config";
import { startRepeatBtn, wordsShuffle } from "./helpers";
import { cardsClickHandler, gameCycle } from "./game-cycle";
import { removeGameBtns, removeStars, renderGameBtns } from "../../category/render-game-attributes";


const startGameHandler = () => {
  const currentCategory = window.location.hash.slice(1).split('/')[1];
  const currentCategoryWords = [...categoriesListConfig[currentCategory]?.wordsConfig];
  const randomizedWordsInPlay = wordsShuffle(currentCategoryWords);

  startGameAction();
  setWordsInPlayAction(randomizedWordsInPlay);
  setCurrentWordAction(randomizedWordsInPlay[0]);

  const cards = document.getElementsByClassName('word-card');
  [...cards].forEach(card => card.addEventListener('click', cardsClickHandler));

  startRepeatBtn();
  gameCycle();
}

export const startBehaviorGame = (): void => {
  renderGameBtns();

  const startGameBtn = document.getElementById('startGameBtn');
  startGameBtn?.addEventListener('click', startGameHandler);

}

export const stopBehaviorGame = (): void => {
  removeGameBtns();
  removeStars();

  const cards = document.getElementsByClassName('word-card');

  [...cards].forEach(card => {
    card.removeEventListener('click', cardsClickHandler);
    card.classList.remove('disabled');
  });
}