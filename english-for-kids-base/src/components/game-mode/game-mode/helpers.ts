import store from "../../../redux/store";
import { playAudioSound } from "../../../shared";
import {
  changeWordsInPlayAction,
  mistakesCountAction,
  setCurrentWordAction
} from "../../../redux/actions";
import { State } from "../../../redux/types";
import { renderStar } from "../../category/render-game-attributes";

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

export const playCurrentAudio = (): void => {
  const state: State = store.getState();
  const { currentWord } = state;

  if (currentWord) {
    playAudioSound(currentWord.sound);
  }
}

export const repeatWordHandler = (): void => {
  playCurrentAudio();
}

export const startRepeatBtn = (): void => {
  const repeatBtn = document.getElementById('repeatWordBtn');
  repeatBtn?.addEventListener('click', repeatWordHandler);
}

export const correctWordBehavior = (targetCard: HTMLElement): void => {
  const state: State = store.getState();
  const { wordsInPlay } = state;

  playAudioSound('./assets/game-sounds/correct-sound.mp3');
  renderStar(true);
  targetCard.classList.add('disabled');

  changeWordsInPlayAction();

  if(wordsInPlay.length) {
    setCurrentWordAction(wordsInPlay[0]);
  }
}

export const incorrectWordBehavior = (): void => {
  playAudioSound('./assets/game-sounds/incorrect-sound.mp3');
  renderStar(false);
  mistakesCountAction(true);
}