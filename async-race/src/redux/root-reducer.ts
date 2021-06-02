import { CREATE_CAR, SET_ACTIVE_PAGE, SET_CARS_LIST, START_APPLICATION } from "./types";

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

  if(action.type === CREATE_CAR) {
    return {
      ...state,
      carsList: [action.payload, ...state.carsList],
    }
  }

  if(action.type === SET_CARS_LIST) {
    return {
      ...state,
      carsList: action.payload,
    }
  }

  return state;
}