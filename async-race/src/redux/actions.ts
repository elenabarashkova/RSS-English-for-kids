import { CREATE_CAR, SET_ACTIVE_PAGE, SET_CARS_LIST } from "./types";

export const setActivePage = (store: Store) =>
  (page: string):void => {
    store.dispatch({
      type: SET_ACTIVE_PAGE,
      payload: page,
    });
  }

export const createCar = (store: Store) =>
  (newCar: Car):void => {
    store.dispatch({
      type: CREATE_CAR,
      payload: newCar,
    });
  }

export const setCarsList = (store: Store) =>
  (carsList: Array<Car>):void => {
    store.dispatch({
      type: SET_CARS_LIST,
      payload: carsList,
    });
  }