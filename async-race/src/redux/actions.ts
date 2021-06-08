import { CREATE_CAR, SET_CARS_LIST } from "./types";
import store from "./core/store";

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