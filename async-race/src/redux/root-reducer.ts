import { CREATE_CAR, DELETE_CAR, SELECT_CARS, SET_CARS_LIST } from "./action-types";

export const rootReducer = (state:State, action:Record<string, string | number | Car>) => {
  if(action.type === CREATE_CAR) {
    return {
      ...state,
      carsList: [...state.carsList, action.payload],
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

  if(action.type === SELECT_CARS) {
    return {
      ...state,
      selectedCar: action.payload,
    }
  }

  return state;
}