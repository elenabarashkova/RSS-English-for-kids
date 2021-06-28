import { changeCurrentWordAction, startGameAction } from "../../redux/actions";
import { categoriesListConfig } from "../main-page/categories-config";
import store from "../../redux/store";
import { GameState } from "../../redux/interface";

const wordsShuffle = (wordsConfig: WordsListConfig) => {
  let currentWordI = wordsConfig.length;
  let randomWordI;

  while (currentWordI !== 0) {
    randomWordI = Math.floor(Math.random() * currentWordI);
    currentWordI--;
    const swap = wordsConfig[currentWordI];
    wordsConfig[currentWordI] = wordsConfig[randomWordI];
    wordsConfig[randomWordI] = swap;
  }
  return wordsConfig;
}

const gameCycle = () => {
  const state = store.getState();
  const { currentWord } = state.game as GameState;

  console.log('play word');
  const cards = document.getElementsByClassName('category-card');

  const cardsClickHandler = (event: Event) => {
    const targetCard =  event.currentTarget as HTMLElement;

    if(currentWord.word === targetCard?.id) {
      console.log('correct');

      [...cards].forEach(card => card.removeEventListener('click', cardsClickHandler));
      changeCurrentWordAction();
      gameCycle();
    }
    else {
      console.log('play sound bad');
    }
  }

  [...cards].forEach(card => card.addEventListener('click', cardsClickHandler));
}

const startGameHandler = () => {
  const currentCategory = window.location.hash.slice(1).split('/')[1];
  const currentCategoryWords = categoriesListConfig[currentCategory]?.wordsConfig;
  const randomizedWordsInPlay = wordsShuffle(currentCategoryWords);

  startGameAction(randomizedWordsInPlay);
  gameCycle();

          // add  CurentWord in state -> from wordsShuffle
  // add function that gets current word from state and does next действия for this word - on subscribe
  // 1. play current word
  // 2. track click on RepeatBtn ->play current Word
  // 3. track click on card -> compare current word with card id (+ add card id)
  // 4. onFailure - появляется пустая звездочка, звучит звук WRONG, счетчик карточки Wrong += 1
  // 5. onSucces - появляется полная звездочка,звучит звук CORRECT, текущий звук - удаляется,
  // // карточке дается свойство - Correct + она становится disabled, счетчик карточки Correct +=1;
  //    from wordsShuffle - достать новое Current word. Если wordsShuffle - empty => конец игры
  // Конец игры: тз
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