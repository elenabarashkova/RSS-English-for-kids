import { SET_ACTIVE_PAGE, START_APPLICATION } from "./types";

export const rootReducer = (state:Record<string, string>, action:Record<string, string>) => {
  if(action.type === SET_ACTIVE_PAGE) {
    return {
      ...state,
      currentPage: action.payload,
    };
  }
  if(action.type === START_APPLICATION) {
    return {
      ...state,
      applicationStarted: true,
    }
  }

  return state;
}