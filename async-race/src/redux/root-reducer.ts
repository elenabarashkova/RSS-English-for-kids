import {
  ADD_NEW_WINNER, SAVE_GARAGE_FORMS_DATA,
  SELECT_CARS,
  SET_CARS_LIST, SET_WINNERS_LIST,
  START_CAR, START_RACE,
  STOP_CAR, STOP_RACE
} from "./action-types";

export const rootReducer = (state:State, action: Action): State => {
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
      selectedCarId: action.payload as number,
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

  if (action.type === START_RACE) {
    return {
      ...state,
      isRaceStarted: true,
      currentWinner: null,
    }
  }

  if (action.type === STOP_RACE) {
    return {
      ...state,
      isRaceStarted: false,
    }
  }

  if (action.type === ADD_NEW_WINNER && state.isRaceStarted) {
    return {
      ...state,
      isRaceStarted: false,
      currentWinner: action.payload as Winner,
    }
  }

  if (action.type === SET_WINNERS_LIST) {
    return {
      ...state,
      winnersList: (action.payload as SetWinnersListPayload).winnersList,
      totalWinners: (action.payload as SetWinnersListPayload).total,
    }
  }

  if (action.type === SAVE_GARAGE_FORMS_DATA) {
    return {
      ...state,
      garageFormsConfig: action.payload as GarageFormsConfig,
    }
  }
  return state;
}