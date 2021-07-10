import store from "./store";
import {
  MISTAKES_COUNT,
  SET_CURRENT_PAGE,
  SET_CURRENT_CATEGORY,
  SET_CURRENT_WORD,
  SET_WORDS_IN_PLAY,
  TOGGLE_GAME_MODE, IS_GAME_STARTED, SET_CATEGORIES_LIST
} from "./action-types";
import { Action } from "./types";
import { ServerCategoryList } from "../components/admin-panel/types";

const getToggleGameMode = (): Action<null> => ({
  type: TOGGLE_GAME_MODE,
  payload: null,
});

export const toggleGameModeAction = (): void => {
  store.dispatch(getToggleGameMode());
}

const getIsGameStarted = (payload: boolean): Action<boolean> => ({
  type: IS_GAME_STARTED,
  payload,
});

export const isGameStartedAction = (isGameStarted: boolean): void => {
  store.dispatch(getIsGameStarted(isGameStarted));
}

const getCurrentPage = (payload: string): Action => ({
  type: SET_CURRENT_PAGE,
  payload,
});

export const setCurrentPageAction = (page: string): void => {
  store.dispatch(getCurrentPage(page));
}

const getCurrentCategory = (payload: string | null): Action<string | null> => ({
  type: SET_CURRENT_CATEGORY,
  payload,
});

export const setCurrentCategoryAction = (category: string | null): void => {
  store.dispatch(getCurrentCategory(category));
}

const getMistakesCount = (payload: boolean): Action<boolean> => ({
  type: MISTAKES_COUNT,
  payload,
});

export const mistakesCountAction = (toAdd: boolean): void => {
  store.dispatch(getMistakesCount(toAdd));
}

const getWordsInPlay = (payload: WordsListConfig): Action<WordsListConfig> => ({
  type: SET_WORDS_IN_PLAY,
  payload,
});

export const setWordsInPlayAction = (wordsInPlay: WordsListConfig): void => {
  store.dispatch(getWordsInPlay(wordsInPlay));
}

const getCurrentWord = (payload: Word): Action<Word> => ({
  type: SET_CURRENT_WORD,
  payload,
});

export const setCurrentWordAction = (word: Word): void => {
  store.dispatch(getCurrentWord(word));
}

const getCategoriesList = (payload: ServerCategoryList): Action<ServerCategoryList> => ({
  type: SET_CATEGORIES_LIST,
  payload,
});

export const setCategoriesListAction = (categiriesList: ServerCategoryList): void => {
  store.dispatch(getCategoriesList(categiriesList));
}