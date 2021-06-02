import { CREATE_CAR, SET_ACTIVE_PAGE, SET_CARS_LIST } from "./types";

export const setActivePage = (page: string):Record<string, string> => ({
  type: SET_ACTIVE_PAGE,
  payload: page,
})

export const createCar = (newCar: Car):Record<string, string | Car> => ({
  type: CREATE_CAR,
  payload: newCar,
})

export const setCarsList = (carsList: Array<Car>):Record<string, string | Array<Car>> => ({
  type: SET_CARS_LIST,
  payload: carsList,
})