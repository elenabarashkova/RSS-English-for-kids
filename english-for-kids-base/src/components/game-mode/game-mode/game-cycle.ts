import store from "../../../redux/store";
import { playAudioSound, redirectToDefaultPage } from "../../../shared";
import {
  correctWordBehavior,
  incorrectWordBehavior,
  playCurrentAudio,
} from "./helpers";
import { AFTER_GAME_TIMEOUT, PLAY_WORD_DELAY } from "../../../shared/constants";
import { State } from "../../../redux/types";
import { removePopup, renderPopup } from "../popup/render";

export const gameOver = (mistakesCount: number): void => {
  if(mistakesCount > 0) {
    renderPopup(false, mistakesCount);
    playAudioSound('./assets/game-sounds/end-game-lose.mp3');
  } else {
    renderPopup(true);
    playAudioSound('./assets/game-sounds/end-game-victory.mp3');
  }

  setTimeout(() => {
    redirectToDefaultPage();
    removePopup();
  }, AFTER_GAME_TIMEOUT)
}

export const gameCycle = (): void => {
  setTimeout(playCurrentAudio, PLAY_WORD_DELAY)
}

export const cardsClickHandler = (event: Event): void => {
  let state: State = store.getState();
  const { currentWord } = state;

  const target =  event.target as HTMLElement;
  const card = target.closest('.word-card:not(.disabled)') as HTMLElement;

  if(!card) {
    return;
  }

  if(currentWord?.word !== card?.id) {
    incorrectWordBehavior();
    return;
  }

  correctWordBehavior(card);

  state = store.getState();
  const { wordsInPlay } = state;

  if(wordsInPlay.length) {
    gameCycle();
  } else {
    gameOver(state.mistakesCount);
  }
}