import { Action, State } from "../types";
import { CREATE_CATEGORY_FORM, SET_CATEGORIES_LIST, SET_WORDS_LIST } from "../action-types";
import { ServerCategory, ServerCategoryList, ServerWordList } from "../../components/admin-panel/types";

export const categoriesListReducer = (
  state = [],
  {type, payload}: Action<ServerCategoryList | boolean>
): State['categoriesList'] => {

  if (type === SET_CATEGORIES_LIST) {
    return payload as ServerCategoryList
  }

  if (type === CREATE_CATEGORY_FORM) {
    const newCategoryItem:ServerCategory = {id: '', name: '', isNewCategory: true};
    const newState:ServerCategoryList  = [...state];

    if(payload as boolean) {
      newState.push(newCategoryItem);
      return newState;
    }

    newState.pop();
    return newState;
  }

  return state
}

export const wordsListReducer = (
  state = [],
  {type, payload}: Action<ServerWordList | boolean>
): State['wordsList'] => {

  if (type === SET_WORDS_LIST) {
    return payload as ServerWordList
  }

  // if (type === CREATE_CATEGORY_FORM) {
  //   const newCategoryItem:ServerCategory = {id: '', name: '', isNewCategory: true};
  //   const newState:ServerCategoryList  = [...state];
  //
  //   if(payload as boolean) {
  //     newState.push(newCategoryItem);
  //     return newState;
  //   }
  //
  //   newState.pop();
  //   return newState;
  // }

  return state
}

