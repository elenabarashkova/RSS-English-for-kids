import { CREATE_CAR, DELETE_CAR, SET_CARS_LIST, UPDATE_CAR } from "./types";

export const rootReducer = (state:State, action:Record<string, string | number | Car>) => {
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

  if(action.type === UPDATE_CAR) {
    return {
      ...state,
      carsList: state.carsList.map((car) => {
        if(car.id === (action.payload as Car).id ) {
          car.name = (action.payload as Car).name;
          car.color = (action.payload as Car).color;
        }
        return car;
      }),
    }
  }

  return state;
}