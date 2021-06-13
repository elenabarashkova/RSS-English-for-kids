interface Store {
  dispatch: CallableFunction,
  subscribe: CallableFunction,
  getState: CallableFunction,
}

interface State {
  carsList: CarsList,
  selectedCarId?: number,
  totalCars: number,
  pageNumber: number,
  startedCarsList: StartedCarsList,
  isRaceStarted: boolean,
  currentWinner: Winner | null,
  winnersList: WinnersList,
  totalWinners: number,
}

interface SetCarsListPayload {
  carsList: CarsList,
  total: number,
}

interface SetWinnersListPayload {
  winnersList: WinnersList,
  total: number,
}

type Payload = number | Car | CarsList | SetCarsListPayload | StartedCar | string | Winner | null | SetWinnersListPayload;

interface Action {
  type: string,
  payload: Payload,
}
