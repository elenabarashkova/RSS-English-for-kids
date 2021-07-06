import store from "./store";
import {
  MISTAKES_COUNT,
  SET_CURRENT_PAGE,
  SET_CURRENT_CATEGORY,
  SET_CURRENT_WORD,
  SET_WORDS_IN_PLAY,
  TOGGLE_GAME_MODE, IS_GAME_STARTED
} from "./action-types";
import { ActionWithPayload } from "./types";

const getToggleGameMode = (): ActionWithPayload<null> => ({
  type: TOGGLE_GAME_MODE,
  payload: null,
});

export const toggleGameModeAction = (): void => {
  store.dispatch(getToggleGameMode());
}

const getIsGameStarted = (payload: boolean): ActionWithPayload<boolean> => ({
  type: IS_GAME_STARTED,
  payload,
});

export const isGameStartedAction = (isGameStarted: boolean): void => {
  store.dispatch(getIsGameStarted(isGameStarted));
}

const getCurrentPage = (payload: string): ActionWithPayload => ({
  type: SET_CURRENT_PAGE,
  payload,
});

export const setCurrentPageAction = (page: string): void => {
  store.dispatch(getCurrentPage(page));
}

const getCurrentCategory = (payload: string | null): ActionWithPayload<string | null> => ({
  type: SET_CURRENT_CATEGORY,
  payload,
});

export const setCurrentCategoryAction = (category: string | null): void => {
  store.dispatch(getCurrentCategory(category));
}

const getMistakesCount = (payload: boolean): ActionWithPayload<boolean> => ({
  type: MISTAKES_COUNT,
  payload,
});

export const mistakesCountAction = (toAdd: boolean): void => {
  store.dispatch(getMistakesCount(toAdd));
}

const getWordsInPlay = (payload: WordsListConfig): ActionWithPayload<WordsListConfig> => ({
  type: SET_WORDS_IN_PLAY,
  payload,
});

export const setWordsInPlayAction = (wordsInPlay: WordsListConfig): void => {
  store.dispatch(getWordsInPlay(wordsInPlay));
}

const getCurrentWord = (payload: Word): ActionWithPayload<Word> => ({
  type: SET_CURRENT_WORD,
  payload,
});

export const setCurrentWordAction = (word: Word): void => {
  store.dispatch(getCurrentWord(word));
}