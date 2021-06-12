interface Store {
  dispatch: CallableFunction,
  subscribe: CallableFunction,
  getState: CallableFunction,
}

interface State {
  currentPage: string,
  carsList: CarsList,
  selectedCarId?: number,
  totalCars: number,
  pageNumber: number,
  startedCarsList: StartedCarsList,
}

interface SetCarsListPayload {
  carsList: CarsList,
  total: number,
}

type Payload = number | Car | CarsList | SetCarsListPayload | StartedCar | string;

interface Action {
  type: string,
  payload: Payload,
}
