import { CREATE_CAR, SET_ACTIVE_PAGE } from "./types";

export const setActivePage = (page: string) => ({
  type: SET_ACTIVE_PAGE,
  payload: page,
})

export const createCar = (newCar: Car) => ({
  type: CREATE_CAR,
  payload: newCar,
})