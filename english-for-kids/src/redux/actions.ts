import store from "./store";
import {
  CHANGE_WORDS_IN_PLAY,
  MISTAKES_COUNT,
  SET_CURRENT_PAGE,
  SET_CURRENT_WORD,
  SET_WORDS_IN_PLAY,
  START_GAME,
  STOP_GAME,
  TOGGLE_GAME_MODE
} from "./action-types";

export const toggleGameModeAction = (): void => {
  store.dispatch({
    type: TOGGLE_GAME_MODE,
  });
}

export const startGameAction = (): void => {
  store.dispatch({
    type: START_GAME,
  });
}

export const stopGameAction = (): void => {
  store.dispatch({
    type: STOP_GAME,
  });
}

export const setCurrentPageAction = (page: string): void => {
  store.dispatch({
    type: SET_CURRENT_PAGE,
    payload: page,
  });
}

export const mistakesCountAction = (toAdd: boolean): void => {
  store.dispatch({
    type: MISTAKES_COUNT,
    payload: toAdd,
  });
}

export const setWordsInPlayAction = (wordsInPlay: WordsListConfig): void => {
  store.dispatch({
    type: SET_WORDS_IN_PLAY,
    payload: wordsInPlay,
  });
}

export const changeWordsInPlayAction = (): void => {
  store.dispatch({
    type: CHANGE_WORDS_IN_PLAY,
  });
}

export const setCurrentWordAction = (word: Word): void => {
  store.dispatch({
    type: SET_CURRENT_WORD,
    payload: word,
  });
}