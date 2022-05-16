import { createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from "./reducers/root-reducer";

const store = createStore(rootReducer, composeWithDevTools());

export { store as default };