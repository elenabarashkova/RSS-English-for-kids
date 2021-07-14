import store from "../../../redux/store";
import { playAudioSound } from "../../../shared";
import {
  mistakesCountAction,
  setCurrentWordAction, setWordsInPlayAction
} from "../../../redux/actions";
import { State } from "../../../redux/types";
import { renderStar } from "../../category/render-game-attributes";
import { updateWord } from "../../statistics/indexedDB";
import { ServerWordList } from "../../admin-panel/types";

export const wordsShuffle = (wordsConfig: ServerWordList): ServerWordList => {
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
  const { currentWord } = state.game;

  if (currentWord) {
    playAudioSound(currentWord.soundurl as string);
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
  const { wordsInPlay } = state.game;

  playAudioSound('./assets/game-sounds/correct-sound.mp3');
  renderStar(true);
  targetCard.classList.add('disabled');

  updateWord(targetCard.id, 'guestedNum');

  const restWordsInPlay = [...wordsInPlay];
  restWordsInPlay.shift();

  setWordsInPlayAction(restWordsInPlay);

  if(restWordsInPlay.length) {
    setCurrentWordAction(restWordsInPlay[0]);
  }
}

export const incorrectWordBehavior = (targetCard: HTMLElement): void => {
  playAudioSound('./assets/game-sounds/incorrect-sound.mp3');
  renderStar(false);
  mistakesCountAction(true);
  updateWord(targetCard.id, 'mistakesNum');
}