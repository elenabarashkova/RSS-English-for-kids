import store from "../../../redux/store";
import { playAudioSound, redirectToDefaultPage } from "../../../shared";
import {
  correctWordBehavior,
  incorrectWordBehavior,
  playCurrentAudio,
} from "./helpers";
import { AFTER_GAME_TIMEOUT, PLAY_WORD_DELAY } from "../../../shared/constants";
import { State } from "../../../redux/types";

export const gameOver = (mistakesCount: number): void => {
  if(mistakesCount > 0) {
    console.log(`You made ${mistakesCount} mistakes`);
    playAudioSound('./assets/game-sounds/end-game-lose.mp3');
  } else {
    console.log(`You Won`);
    playAudioSound('./assets/game-sounds/end-game-victory.mp3');
  }

  setTimeout(redirectToDefaultPage, AFTER_GAME_TIMEOUT)
}

export const gameCycle = (): void => {
  setTimeout(playCurrentAudio, PLAY_WORD_DELAY)
}

export const cardsClickHandler = (event: Event): void => {
  const state: State = store.getState();
  const { currentWord, wordsInPlay } = state;

  const target =  event.target as HTMLElement;
  const card = target.closest('.word-card') as HTMLElement;

  if(!card || currentWord?.word !== card?.id) {
    incorrectWordBehavior();
    return;
  }

  correctWordBehavior(card);

  if(wordsInPlay.length) {
    gameCycle();
  } else {
    gameOver(state.mistakesCount);
  }
}