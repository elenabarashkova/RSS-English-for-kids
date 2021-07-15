import { AnyAction } from "redux";
import store from "./store";
import {
  MISTAKES_COUNT,
  SET_CURRENT_PAGE,
  SET_CURRENT_CATEGORY,
  SET_CURRENT_WORD,
  SET_WORDS_IN_PLAY,
  TOGGLE_GAME_MODE,
  IS_GAME_STARTED,
  SET_CATEGORIES_LIST,
  CREATE_CATEGORY_FORM,
  SET_WORDS_LIST,
  SET_ALL_WORDS_LIST,
  CREATE_WORD_FORM,
} from "./action-types";
import { ServerCategoryList, ServerWord, ServerWordList } from "../components/admin-panel/types";

const getToggleGameMode = (): AnyAction => ({
  type: TOGGLE_GAME_MODE,
  payload: null,
});

export const toggleGameModeAction = (): void => {
  store.dispatch(getToggleGameMode());
}

const getIsGameStarted = (payload: boolean): AnyAction => ({
  type: IS_GAME_STARTED,
  payload,
});

export const isGameStartedAction = (isGameStarted: boolean): void => {
  store.dispatch(getIsGameStarted(isGameStarted));
}

const getCurrentPage = (payload: string): AnyAction => ({
  type: SET_CURRENT_PAGE,
  payload,
});

export const setCurrentPageAction = (page: string): void => {
  store.dispatch(getCurrentPage(page));
}

const getCurrentCategory = (payload: string | null): AnyAction => ({
  type: SET_CURRENT_CATEGORY,
  payload,
});

export const setCurrentCategoryAction = (category: string | null): void => {
  store.dispatch(getCurrentCategory(category));
}

const getMistakesCount = (payload: boolean): AnyAction => ({
  type: MISTAKES_COUNT,
  payload,
});

export const mistakesCountAction = (toAdd: boolean): void => {
  store.dispatch(getMistakesCount(toAdd));
}

const getWordsInPlay = (payload: ServerWordList): AnyAction => ({
  type: SET_WORDS_IN_PLAY,
  payload,
});

export const setWordsInPlayAction = (wordsInPlay: ServerWordList): void => {
  store.dispatch(getWordsInPlay(wordsInPlay));
}

const getCurrentWord = (payload: ServerWord): AnyAction => ({
  type: SET_CURRENT_WORD,
  payload,
});

export const setCurrentWordAction = (word: ServerWord): void => {
  store.dispatch(getCurrentWord(word));
}

const getCategoriesList = (payload: ServerCategoryList): AnyAction => ({
  type: SET_CATEGORIES_LIST,
  payload,
});

export const setCategoriesListAction = (categiriesList: ServerCategoryList): void => {
  store.dispatch(getCategoriesList(categiriesList));
}

const getCreateCatForm = (payload: boolean): AnyAction => ({
  type: CREATE_CATEGORY_FORM,
  payload,
});

export const setCreateCatFormAction = (toAdd: boolean): void => {
  store.dispatch(getCreateCatForm(toAdd));
}

const getWordsList = (payload: ServerWordList): AnyAction => ({
  type: SET_WORDS_LIST,
  payload,
});

export const setWordsListAction = (wordsList: ServerWordList): void => {
  store.dispatch(getWordsList(wordsList));
}

const getAllWordsList = (payload: ServerWordList): AnyAction => ({
  type: SET_ALL_WORDS_LIST,
  payload,
});

export const setAllWordsListAction = (wordsList: ServerWordList): void => {
  store.dispatch(getAllWordsList(wordsList));
}

const getCreateWordForm = (payload: boolean): AnyAction => ({
  type: CREATE_WORD_FORM,
  payload,
});

export const setCreateWordFormAction = (toAdd: boolean): void => {
  store.dispatch(getCreateWordForm(toAdd));
}