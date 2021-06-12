import {
  CHANGE_PAGE_NUMBER,
  CREATE_CAR,
  SELECT_CARS,
  SET_CARS_LIST,
  START_CAR,
  STOP_CAR
} from "./action-types";

export const rootReducer = (state:State, action: Action): State => {
  if (action.type === CREATE_CAR) {
    return {
      ...state,
      carsList: [...state.carsList, action.payload as Car],
    }
  }

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
      selectedCar: action.payload as string,
    }
  }

  if (action.type === CHANGE_PAGE_NUMBER) {
    let newPageNumber = state.pageNumber + (action.payload as number);
    if (newPageNumber < 1) {
      newPageNumber = 1;
    }

    const maxPageNumber = Math.ceil(state.totalCars/7);
    if (newPageNumber > maxPageNumber) {
      newPageNumber = maxPageNumber;
    }
    return {
      ...state,
      pageNumber: newPageNumber,
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