import store from "./core/store";
import {
  SELECT_CARS,
  SET_CARS_LIST,
  START_CAR,
  STOP_CAR,
  START_RACE,
  ADD_NEW_WINNER,
} from "./action-types";

export const setCarsList = (carsList: CarsList, total: number):void => {
  store.dispatch({
    type: SET_CARS_LIST,
    payload: {carsList, total},
  });
}

export const selectCarAction = (carId: number):void => {
  store.dispatch({
    type: SELECT_CARS,
    payload: carId,
  });
}

export const startCarAction = (id: number, duration: number):void => {
  store.dispatch({
    type: START_CAR,
    payload: {id, duration},
  });
}

export const stopCarAction = (id: number):void => {
  store.dispatch({
    type: STOP_CAR,
    payload: id,
  });
}

export const raceStartAction = ():void => {
  store.dispatch({
    type: START_RACE,
  });
}

export const addCurrentWinner = (winner: Winner):void => {
  store.dispatch({
    type: ADD_NEW_WINNER,
    payload: winner,
  });
}