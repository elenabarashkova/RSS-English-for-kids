import {
  SELECT_CARS,
  SET_CARS_LIST,
  START_CAR,
  STOP_CAR
} from "./action-types";

export const rootReducer = (state:State, action: Action): State => {
  if (action.type === SET_CARS_LIST) {
    return {
      ...state,
      carsList: (action.payload as SetCarsListPayload).carsList,
      totalCars: (action.payload as SetCarsListPayload).total,
    }
  }

  if (action.type === SELECT_CARS) {
    return {
      ...state,
      selectedCarId: action.payload as number,
    }
  }

  if (action.type === START_CAR) {
    return {
      ...state,
      startedCarsList: [...state.startedCarsList, action.payload as StartedCar],
    }
  }

  if (action.type === STOP_CAR) {
    return {
      ...state,
      startedCarsList: state.startedCarsList.filter((car) => car.id !== action.payload),
    }
  }

  return state;
}