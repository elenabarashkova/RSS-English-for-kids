import { DEFAULT_PAGE } from "../../shared";
import { Action, State } from "../types";
import { SET_CURRENT_CATEGORY, SET_CURRENT_PAGE } from "../action-types";

export const currentPageReducer = (
  state = DEFAULT_PAGE,
  {type, payload}: Action
): State['currentPage'] => {
  if (type === SET_CURRENT_PAGE) {
    return payload
  }
  return state
}

export const currentCategoryReducer = (
  state = null,
  {type, payload}: Action<string | null>
): State['currentCategory'] => {
  if (type === SET_CURRENT_CATEGORY) {
    return payload
  }
  return state
}