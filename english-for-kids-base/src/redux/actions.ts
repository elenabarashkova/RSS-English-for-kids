import store from "./store";
import {
  CHANGE_WORDS_IN_PLAY,
  MISTAKES_COUNT,
  SET_CURRENT_PAGE,
  SET_CURRENT_CATEGORY,
  SET_CURRENT_WORD,
  SET_WORDS_IN_PLAY,
  TOGGLE_GAME_MODE, IS_GAME_STARTED
} from "./action-types";

export const toggleGameModeAction = (): void => {
  store.dispatch({
    type: TOGGLE_GAME_MODE,
  });
}

export const isGameStartedAction = (isGameStarted: boolean): void => {
  store.dispatch({
    type: IS_GAME_STARTED,
    payload: isGameStarted,
  });
}

export const setCurrentPageAction = (page: string): void => {
  store.dispatch({
    type: SET_CURRENT_PAGE,
    payload: page,
  });
}

export const setCurrentCategoryAction = (category: string | null): void => {
  store.dispatch({
    type: SET_CURRENT_CATEGORY,
    payload: category,
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