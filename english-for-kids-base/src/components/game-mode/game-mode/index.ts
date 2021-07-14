import store from "../../../redux/store";
import {
  isGameStartedAction,
  setCurrentWordAction,
  setWordsInPlayAction,
} from "../../../redux/actions";
import { startRepeatBtn, wordsShuffle } from "./helpers";
import { cardsClickHandler, gameCycle } from "./game-cycle";
import { removeGameBtns, removeStars, renderGameBtns } from "../../category/render-game-attributes";


const startGameHandler = () => {
  const currentCategoryWords = [...store.getState().wordsList];
  const randomizedWordsInPlay = wordsShuffle(currentCategoryWords);

  isGameStartedAction(true);
  setWordsInPlayAction(randomizedWordsInPlay);
  setCurrentWordAction(randomizedWordsInPlay[0]);

  const cardsWrap = document.querySelector('.category-page.card-wrap')
  cardsWrap?.addEventListener('click', cardsClickHandler);

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

  const cardsWrap = document.querySelector('.category-page.card-wrap')
  cardsWrap?.removeEventListener('click', cardsClickHandler);

  const cards = document.getElementsByClassName('word-card');
  [...cards].forEach(card => {card.classList.remove('disabled')});
}