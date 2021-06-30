import { setCurrentWordAction, setWordsInPlayAction, startGameAction } from "../../../redux/actions";
import { categoriesListConfig } from "../../main-page/categories-config";
import { stopRepeatBtn, wordsShuffle } from "./helpers";
import { gameCycle } from "./game-cycle";


const startGameHandler = () => {
  const currentCategory = window.location.hash.slice(1).split('/')[1];
  const currentCategoryWords = [...categoriesListConfig[currentCategory]?.wordsConfig];
  const randomizedWordsInPlay = wordsShuffle(currentCategoryWords);

  startGameAction();
  setWordsInPlayAction(randomizedWordsInPlay);
  setCurrentWordAction(randomizedWordsInPlay[0]);
  gameCycle();
}

export const startBehaviorGame = (): void => {
  // render game btns
  const startGameBtn = document.getElementById('startGameBtn');

  startGameBtn?.addEventListener('click', startGameHandler);
}

export const stopBehaviorGame = (): void => {
  // remove game btns
  // remove stars
  // remove event listener from cards container
  // remove classes from cards

  // delete the rest

  const startGameBtn = document.getElementById('startGameBtn');
  startGameBtn?.removeEventListener('click', startGameHandler);

  stopRepeatBtn();
}