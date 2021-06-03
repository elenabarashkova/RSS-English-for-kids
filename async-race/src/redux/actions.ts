import { CREATE_CAR, SET_ACTIVE_PAGE, SET_CARS_LIST } from "./types";

export const setActivePage = (page: string): ActionType<string> => ({
  type: SET_ACTIVE_PAGE,
  payload: page,
})

export const createCar = (newCar: Car): ActionType<Car> => ({
  type: CREATE_CAR,
  payload: newCar,
})

export const setCarsList = (carsList: Array<Car>): ActionType<Array <Car> > => ({
  type: SET_CARS_LIST,
  payload: carsList,
})