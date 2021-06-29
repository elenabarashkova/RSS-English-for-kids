import store from "../../../redux/store";
import { GameState } from "../../../redux/interface";
import { playAudioSound, redirectToDefaultPage } from "../../../shared";
import {
  correctWordBehavior,
  incorrectWordBehavior,
  playCurrentAudio,
  startRepeatBtn,
} from "./helpers";

export const gameOver = (mistakesCount: number): void => {
  if(mistakesCount > 0) {
    console.log(`You made ${mistakesCount} mistakes`);
    playAudioSound('./assets/game-sounds/end-game-lose.mp3');
  } else {
    console.log(`You Won`);
    playAudioSound('./assets/game-sounds/end-game-victory.mp3');
  }

  setTimeout(redirectToDefaultPage, 3000)
}

export const gameCycle = () => {
  const state = store.getState();
  const { currentWord } = state.game as GameState;
  const { wordsInPlay } = state.game as GameState;

  setTimeout(playCurrentAudio, 2000)

  startRepeatBtn();

  const cards = document.querySelectorAll('.word-card:not(.disabled)');

  const cardsClickHandler = (event: Event) => {
    const targetCard =  event.currentTarget as HTMLElement;

    if(currentWord.word === targetCard?.id) {
      correctWordBehavior(targetCard);
      [...cards].forEach(card => card.removeEventListener('click', cardsClickHandler));

      if(wordsInPlay.length) {
        gameCycle();
      } else {
        gameOver((state.game as GameState).mistakesCount);
      }
    }
    else {
      incorrectWordBehavior();
    }
  }

  [...cards].forEach(card => card.addEventListener('click', cardsClickHandler));
}