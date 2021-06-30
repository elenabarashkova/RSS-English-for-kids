import { DEFAULT_PAGE } from "../../shared";
import { ActionWithPayload, State } from "../types";
import { SET_CURRENT_CATEGORY, SET_CURRENT_PAGE } from "../action-types";

export const currentPageReducer = (state = DEFAULT_PAGE, action: ActionWithPayload): State['currentPage'] => {
  if (action.type === SET_CURRENT_PAGE) {
    return action.payload as string
  }
  return state
}

export const currentCategoryReducer = (state = null, action: ActionWithPayload): State['currentCategory'] => {
  if (action.type === SET_CURRENT_CATEGORY) {
    return action.payload as string
  }
  return state
}