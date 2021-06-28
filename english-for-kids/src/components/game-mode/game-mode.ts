import { changeCurrentWordAction, mistakesCountAction, startGameAction, stopGameAction } from "../../redux/actions";
import { categoriesListConfig } from "../main-page/categories-config";
import store from "../../redux/store";
import { GameState } from "../../redux/interface";
import { playAudioSound, redirectToDefaultPage } from "../../shared";

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

const gameOver = (mistakesCount: number): void => {
  if(mistakesCount > 0) {
    console.log(`You made ${mistakesCount} mistakes`);
    playAudioSound('./assets/end-game-lose.mp3');
  } else {
    console.log(`You Won`);
    playAudioSound('./assets/end-game-victory.mp3');
  }
  setTimeout(redirectToDefaultPage, 3000)
}

const gameCycle = () => {
  const state = store.getState();
  const { currentWord } = state.game as GameState;
  const { wordsInPlay } = state.game as GameState;

  const playCurrentAudio = () => {
    playAudioSound(currentWord.sound);
  }

  setTimeout(playCurrentAudio, 2000)

  const repeatWordHandler = () => {
    playCurrentAudio();
  }

  const repeatBtn = document.getElementById('repeatWordBtn');
  repeatBtn?.addEventListener('click', repeatWordHandler);

  const cards = document.querySelectorAll('.word-card:not(.disabled)');

  const cardsClickHandler = (event: Event) => {
    const targetCard =  event.currentTarget as HTMLElement;

    if(currentWord.word === targetCard?.id) {
      playAudioSound('./assets/correct-sound.mp3');
      renderStars(true);
      targetCard.classList.add('disabled');
      [...cards].forEach(card => card.removeEventListener('click', cardsClickHandler));
      changeCurrentWordAction();

      if(wordsInPlay.length) {
        repeatBtn?.removeEventListener('click', repeatWordHandler);
        gameCycle();
      } else {
        repeatBtn?.removeEventListener('click', repeatWordHandler);
        gameOver((state.game as GameState).mistakesCount);
      }
    }
    else {
      playAudioSound('./assets/incorrect-sound.mp3');
      renderStars(false);
      mistakesCountAction();
    }
  }

  [...cards].forEach(card => card.addEventListener('click', cardsClickHandler));
}

const startGameHandler = () => {
  const currentCategory = window.location.hash.slice(1).split('/')[1];
  const currentCategoryWords = [...categoriesListConfig[currentCategory]?.wordsConfig];
  const randomizedWordsInPlay = wordsShuffle(currentCategoryWords);

  startGameAction(randomizedWordsInPlay);
  gameCycle();
}

export const startBehaviorGame = (): void => {
  const startGameBtn = document.getElementById('startGameBtn');


  startGameBtn?.addEventListener('click', startGameHandler);
}

export const stopBehaviorGame = (): void => {
  const startGameBtn = document.getElementById('startGameBtn');
  startGameBtn?.removeEventListener('click', startGameHandler);

  // todo:add here repeatBtn?.removeEventListener('click', repeatWordHandler);
}