import { CREATE_CAR, SET_CARS_LIST } from "./types";

export const rootReducer = (state:State, action:Record<string, string>) => {
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