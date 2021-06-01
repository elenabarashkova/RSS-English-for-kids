import { SET_ACTIVE_PAGE } from "./types";

export const rootReducer = (state:Record<string, string>, action:Record<string, string>) => {
  if(action.type === SET_ACTIVE_PAGE) {
    return {
      ...state,
      currentPage: action.payload,
    };
  }
  return state;
}