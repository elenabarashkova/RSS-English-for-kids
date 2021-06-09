interface Store {
  dispatch: CallableFunction,
  subscribe: CallableFunction,
  getState: CallableFunction,
}

interface State {
  currentPage: string,
  carsList: CarsList,
  selectedCar?: string,
  totalCars: number,
  pageNumber: number,
}