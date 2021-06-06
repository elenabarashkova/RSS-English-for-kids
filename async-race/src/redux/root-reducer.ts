import { CREATE_CAR, DELETE_CAR, SET_CARS_LIST } from "./types";

export const rootReducer = (state:State, action:Record<string, string | number>) => {
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

  if(action.type === DELETE_CAR) {
    return {
      ...state,
      carsList: state.carsList.filter((car) => car.id !== action.payload),
    }
  }

  return state;
}