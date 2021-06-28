import { changeCurrentWordAction, startGameAction } from "../../redux/actions";
import { categoriesListConfig } from "../main-page/categories-config";
import store from "../../redux/store";
import { GameState } from "../../redux/interface";
import { playAudioSound } from "../../shared";
import { getMenu } from "../menu/get-menu";

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

const renderStars = (isCorrect: boolean): void => {
  const starsWrap = document.getElementById('starsWrap');

  starsWrap?.insertAdjacentHTML('beforeend', `${isCorrect ? '+' : '-'}`);
}

const gameOver = (): void => {

}

const gameCycle = () => {
  const state = store.getState();
  const { currentWord } = state.game as GameState;
  const { wordsInPlay } = state.game as GameState;

  playAudioSound(currentWord.sound);

  // track click on RepeatBtn ->play current Word

  const cards = document.querySelectorAll('.category-card:not(.disabled)');

  const cardsClickHandler = (event: Event) => {
    const targetCard =  event.currentTarget as HTMLElement;

    if(currentWord.word === targetCard?.id) {
      playAudioSound('./assets/correct-sound.mp3');
      renderStars(true);
      targetCard.classList.add('disabled');
      [...cards].forEach(card => card.removeEventListener('click', cardsClickHandler));
      changeCurrentWordAction();

      if(wordsInPlay.length) {
        gameCycle();
      } else {
        console.log('Game Over');
      }
    }
    else {
      playAudioSound('./assets/incorrect-sound.mp3');
      renderStars(false);
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
          // 1. play current word
  // 2. track click on RepeatBtn ->play current Word
          // 3. track click on card -> compare current word with card id (+ add card id)
          // 4. onFailure - появляется пустая звездочка, звучит звук WRONG,
          // 5. onSucces - появляется полная звездочка,звучит звук CORRECT, текущий звук - удаляется,
          // карточке дается свойство - Correct + она становится disabled,
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