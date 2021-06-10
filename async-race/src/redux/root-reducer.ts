import {
  CHANGE_PAGE_NUMBER,
  CREATE_CAR,
  DELETE_CAR,
  SELECT_CARS,
  SET_CARS_LIST,
  START_CAR,
  STOP_CAR
} from "./action-types";

export const rootReducer = (state:State, action:any) => {
  if(action.type === CREATE_CAR) {
    return {
      ...state,
      carsList: [...state.carsList, action.payload],
    }
  }

  if(action.type === SET_CARS_LIST) {
    return {
      ...state,
      carsList: action.payload.carsList,
      totalCars: action.payload.total,
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

  if(action.type === CHANGE_PAGE_NUMBER) {
    let newPageNumber = state.pageNumber + action.payload;
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

  if(action.type === START_CAR) {
    return {
      ...state,
      startedCarsList: [...state.startedCarsList, action.payload],
    }
  }

  if(action.type === STOP_CAR) {
    return {
      ...state,
      startedCarsList: state.startedCarsList.filter((car) => car.id !== action.payload),
    }
  }

  return state;
}