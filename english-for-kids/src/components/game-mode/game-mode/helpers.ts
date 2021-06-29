import store from "../../../redux/store";
import { GameState } from "../../../redux/types";
import { playAudioSound } from "../../../shared";
import { changeCurrentWordAction, mistakesCountAction } from "../../../redux/actions";

export const wordsShuffle = (wordsConfig: WordsListConfig) => {
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

export const playCurrentAudio = () => {
  const state = store.getState();
  const { currentWord } = state.game as GameState;

  playAudioSound(currentWord.sound);
}

export const repeatWordHandler = () => {
  playCurrentAudio();
}

export const startRepeatBtn = () => {
  const repeatBtn = document.getElementById('repeatWordBtn');
  repeatBtn?.addEventListener('click', repeatWordHandler);
}

export const stopRepeatBtn = () => {
  const repeatBtn = document.getElementById('repeatWordBtn');
  repeatBtn?.removeEventListener('click', repeatWordHandler);
}

export const correctWordBehavior = (targetCard: HTMLElement) => {
  playAudioSound('./assets/game-sounds/correct-sound.mp3');
  renderStars(true);
  targetCard.classList.add('disabled');
  changeCurrentWordAction();
  stopRepeatBtn();
}

export const incorrectWordBehavior = () => {
  playAudioSound('./assets/game-sounds/incorrect-sound.mp3');
  renderStars(false);
  mistakesCountAction();
}