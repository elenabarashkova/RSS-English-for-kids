import store from "./core/store";
import { CHANGE_PAGE_NUMBER, CREATE_CAR, DELETE_CAR, SELECT_CARS, SET_CARS_LIST, START_CAR } from "./action-types";

export const createCar = (newCar: Car):void => {
  store.dispatch({
    type: CREATE_CAR,
    payload: newCar,
  });
}

export const setCarsList = (carsList: CarsList, total: number):void => {
  store.dispatch({
    type: SET_CARS_LIST,
    payload: {carsList, total},
  });
}

export const deleteCarAction = (carId: number):void => {
  store.dispatch({
    type: DELETE_CAR,
    payload: carId,
  });
}

export const selectCarAction = (carId: number):void => {
  store.dispatch({
    type: SELECT_CARS,
    payload: carId,
  })
}

export const changePageNumber = (result: number):void => {
  store.dispatch({
    type: CHANGE_PAGE_NUMBER,
    payload: result,
  })
}

export const startCarAction = (id: number, duration: number):void => {
  store.dispatch({
    type: START_CAR,
    payload: {id, duration},
  })
}