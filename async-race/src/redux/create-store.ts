export const createStore = (
  rootReducer:CallableFunction,
  initialState:Record<string, string | boolean | Array<Car>>) => {
  let state:Record<string, string> = rootReducer(initialState, {type: '__INIT__'});
  const subscribers:Array<CallableFunction> = [];

  return {
    dispatch(action: Record<string, string>) {
      const prevState = state;
      state = rootReducer(state, action);
      subscribers.forEach(callback => callback(prevState));
    },
    subscribe(callback: CallableFunction) {
      subscribers.push(callback);
    },
    getState() {
      return state;
    },
  }
}