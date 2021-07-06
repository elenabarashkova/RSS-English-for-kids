import { DEFAULT_PAGE } from "../../shared";
import { ActionWithPayload, State } from "../types";
import { SET_CURRENT_CATEGORY, SET_CURRENT_PAGE } from "../action-types";

export const currentPageReducer = (
  state = DEFAULT_PAGE,
  {type, payload}: ActionWithPayload
): State['currentPage'] => {
  if (type === SET_CURRENT_PAGE) {
    return payload
  }
  return state
}

export const currentCategoryReducer = (
  state = null,
  {type, payload}: ActionWithPayload<string | null>
): State['currentCategory'] => {
  if (type === SET_CURRENT_CATEGORY) {
    return payload
  }
  return state
}