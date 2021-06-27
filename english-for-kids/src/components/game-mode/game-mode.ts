import { startGameAction } from "../../redux/actions";
import { categoriesListConfig } from "../main-page/categories-config";

const wordsShuffle = (wordsConfig: WordsListConfig) => {
  const wordsArray =  Object.keys(wordsConfig);

  let currentWordI = wordsArray.length;
  let randomWordI;

  while (currentWordI !== 0) {
    randomWordI = Math.floor(Math.random() * currentWordI);
    currentWordI--;
    const swap = wordsArray[currentWordI];
    wordsArray[currentWordI] = wordsArray[randomWordI];
    wordsArray[randomWordI] = swap;
  }
  return wordsArray;
}



const startGameHandler = () => {
  const currentCategory = window.location.hash.slice(1).split('/')[1];
  const currentCategoryWords = categoriesListConfig[currentCategory]?.wordsConfig;

  startGameAction(currentCategoryWords);
  wordsShuffle(currentCategoryWords);

}

export const startBehaviorGame = (): void => {
  const startGameBtn = document.getElementById('startGameBtn');


  startGameBtn?.addEventListener('click', startGameHandler);
}

export const stopBehaviorGame = (): void => {
  const startGameBtn = document.getElementById('startGameBtn');
  startGameBtn?.removeEventListener('click', startGameHandler);
  console.log('stop card behavior GAME');
}