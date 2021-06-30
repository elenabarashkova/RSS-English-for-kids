import store from "../../../redux/store";
import { playAudioSound, redirectToDefaultPage } from "../../../shared";
import {
  correctWordBehavior,
  incorrectWordBehavior,
  playCurrentAudio,
  startRepeatBtn,
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
  const state: State = store.getState();
  const { currentWord, wordsInPlay } = state;

  setTimeout(playCurrentAudio, PLAY_WORD_DELAY)

  startRepeatBtn();

  const cards = document.querySelectorAll('.word-card:not(.disabled)');

  const cardsClickHandler = (event: Event) => {
    const targetCard =  event.currentTarget as HTMLElement;

    if(currentWord?.word === targetCard?.id) {
      correctWordBehavior(targetCard);
      [...cards].forEach(card => card.removeEventListener('click', cardsClickHandler));

      if(wordsInPlay.length) {
        gameCycle();
      } else {
        gameOver(state.mistakesCount);
      }
    }
    else {
      incorrectWordBehavior();
    }
  }

  [...cards].forEach(card => card.addEventListener('click', cardsClickHandler));
}