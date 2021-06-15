import { reducerConfig } from "./reducer-config";

const customReducerMaker = (handlers: Record<string, CallableFunction>) =>
  (state:State, action: Action): State => {

    if(handlers[action.type]) {
      const handler = handlers[action.type];

      return handler(state, action);
    }

    return state;
  }

export const rootReducer = customReducerMaker(reducerConfig);