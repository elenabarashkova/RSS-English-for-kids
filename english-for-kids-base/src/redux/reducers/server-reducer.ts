import { AnyAction } from "redux";
import { State } from "../types";
import {
  CREATE_CATEGORY_FORM,
  CREATE_WORD_FORM, SET_ALL_WORDS_LIST,
  SET_CATEGORIES_LIST,
  SET_WORDS_LIST
} from "../action-types";
import { ServerCategoryList, ServerWordList } from "../../components/admin-panel/types";

export const categoriesListReducer = (
  state: ServerCategoryList = [],
  {type, payload}: AnyAction
): State['categoriesList'] => {

  if (type === SET_CATEGORIES_LIST) {
    return payload as ServerCategoryList
  }

  return state
}

export const creatingCategoryReducer = (
  state = false,
  {type, payload}: AnyAction
): State['creatingCategory'] => {
  if (type === CREATE_CATEGORY_FORM) {
    return payload;
  }

  return state
}

export const wordsListReducer = (
  state = [],
  {type, payload}: AnyAction
): State['wordsList'] => {

  if (type === SET_WORDS_LIST) {
    return payload as ServerWordList
  }

  return state
}


export const creatingWordReducer = (
  state = false,
  {type, payload}: AnyAction
): State['creatingWord'] => {
  if (type === CREATE_WORD_FORM) {
    return payload;
  }

  return state
}

export const allWordsListReducer = (
  state = [],
  {type, payload}: AnyAction
): State['allWordsList'] => {

  if (type === SET_ALL_WORDS_LIST) {
    return payload as ServerWordList
  }

  return state
}

