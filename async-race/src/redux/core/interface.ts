interface Store {
  dispatch: CallableFunction,
  subscribe: CallableFunction,
  getState: CallableFunction,
}

interface Actions {
  setCarsListAction: CallableFunction,
  createCarAction: CallableFunction,
}