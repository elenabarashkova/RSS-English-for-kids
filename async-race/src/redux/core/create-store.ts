export const createStore = (
  rootReducer:CallableFunction,
  initialState:State): Store => {
  let state:State = rootReducer(initialState, {type: '__INIT__'});
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