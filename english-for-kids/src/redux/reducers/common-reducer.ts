import { DEFAULT_PAGE } from "../../shared";
import { ActionWithPayload } from "../types";
import { SET_CURRENT_PAGE } from "../action-types";

export const currentPageReducer = (state = DEFAULT_PAGE, action: ActionWithPayload) => {
  if (action.type === SET_CURRENT_PAGE) {
    return (action.payload)
  }
  return state
}