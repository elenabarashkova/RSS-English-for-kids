import store from "../../../redux/store";
import { playAudioSound } from "../../../shared";
import {
  changeWordsInPlayAction,
  mistakesCountAction,
  setCurrentWordAction
} from "../../../redux/actions";

export const wordsShuffle = (wordsConfig: WordsListConfig): WordsListConfig => {
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

export const renderStars = (isCorrect: boolean): void => {
  const starsWrap = document.getElementById('starsWrap');

  starsWrap?.insertAdjacentHTML('beforeend', `${isCorrect ? '+' : '-'}`);
}

export const playCurrentAudio = (): void => {
  const state = store.getState();
  const { currentWord } = state;

  playAudioSound((currentWord as Word).sound);
}

export const repeatWordHandler = (): void => {
  playCurrentAudio();
}

export const startRepeatBtn = (): void => {
  const repeatBtn = document.getElementById('repeatWordBtn');
  repeatBtn?.addEventListener('click', repeatWordHandler);
}

export const stopRepeatBtn = (): void => {
  const repeatBtn = document.getElementById('repeatWordBtn');
  repeatBtn?.removeEventListener('click', repeatWordHandler);
}

export const correctWordBehavior = (targetCard: HTMLElement): void => {
  const state = store.getState();
  const { wordsInPlay } = state;

  playAudioSound('./assets/game-sounds/correct-sound.mp3');
  renderStars(true);
  targetCard.classList.add('disabled');

  changeWordsInPlayAction();

  if((wordsInPlay as WordsListConfig).length) {
    setCurrentWordAction(wordsInPlay[0]);
  }

  stopRepeatBtn();
}

export const incorrectWordBehavior = (): void => {
  playAudioSound('./assets/game-sounds/incorrect-sound.mp3');
  renderStars(false);
  mistakesCountAction(true);
}