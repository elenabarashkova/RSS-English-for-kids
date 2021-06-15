import {
  ADD_NEW_WINNER, SAVE_GARAGE_FORMS_DATA,
  SELECT_CARS,
  SET_CARS_LIST,
  SET_WINNERS_LIST,
  START_CAR,
  START_RACE,
  STOP_CAR,
  STOP_RACE
} from "./action-types";

export const reducerConfig: Record<string, CallableFunction> = {
  [SET_CARS_LIST]: (state: State, action: Action): State => ({
    ...state,
    carsList: (action.payload as SetCarsListPayload).carsList,
    totalCars: (action.payload as SetCarsListPayload).total,
  }),

  [SELECT_CARS]: (state: State, action: Action): State => ({
    ...state,
    selectedCarId: action.payload as number,
  }),

  [START_CAR]: (state: State, action: Action): State => ({
    ...state,
    startedCarsList: [...state.startedCarsList, action.payload as StartedCar],
  }),

  [STOP_CAR]: (state: State, action: Action): State => ({
    ...state,
    startedCarsList: state.startedCarsList.filter((car) => car.id !== action.payload),
  }),

  [START_RACE]: (state: State): State => ({
    ...state,
    isRaceStarted: true,
    currentWinner: null,
  }),

  [STOP_RACE]: (state: State): State => ({
    ...state,
    isRaceStarted: false,
  }),

  [SET_WINNERS_LIST]: (state: State, action: Action): State => ({
    ...state,
    winnersList: (action.payload as SetWinnersListPayload).winnersList,
    totalWinners: (action.payload as SetWinnersListPayload).total,
  }),

  [ADD_NEW_WINNER]: (state: State, action: Action): State => {
    if(state.isRaceStarted) {
      return {
        ...state,
        isRaceStarted: false,
        currentWinner: action.payload as Winner,
      }
    }
    return state;
  },

  [SAVE_GARAGE_FORMS_DATA]: (state: State, action: Action): State => ({
    ...state,
    garageFormsConfig: action.payload as GarageFormsConfig,
  }),
};