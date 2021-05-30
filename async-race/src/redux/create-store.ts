export const createStore = (rootReducer:Function, initialState:Record<string, string>) => {
  let state:Record<string, string> = rootReducer(initialState, {type: '__INIT__'});
  const subscribers:Array<CallableFunction> = [];

  return {
    dispatch(action: Record<string, string>) {
      state = rootReducer(state, action);
      subscribers.forEach(callback => callback());
    },
    subscribe(callback: CallableFunction) {
      subscribers.push(callback);
    },
    getState() {
      return state;
    },
  }
}