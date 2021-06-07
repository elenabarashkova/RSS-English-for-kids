import store from "./core/store";
import { CREATE_CAR, DELETE_CAR, SET_CARS_LIST, UPDATE_CAR } from "./types";

export const createCar = (newCar: Car):void => {
  store.dispatch({
    type: CREATE_CAR,
    payload: newCar,
  });
}

export const setCarsList = (carsList: CarsList):void => {
  store.dispatch({
    type: SET_CARS_LIST,
    payload: carsList,
  });
}

export const deleteCar = (carId: number):void => {
    store.dispatch({
      type: DELETE_CAR,
      payload: carId,
    });
  }

export const updateCar = (updatedCar: Car):void => {
    store.dispatch({
      type: UPDATE_CAR,
      payload: updatedCar,
    });
  }