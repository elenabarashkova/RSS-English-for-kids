interface Store {
  dispatch: CallableFunction,
  subscribe: CallableFunction,
  getState: CallableFunction,
}

interface ActionType<PayloadType> {
  type: string,
  payload: PayloadType,
}