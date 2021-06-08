import { createStore } from "./create-store";
import { rootReducer } from "../root-reducer";
import { initialState } from "../initial";

const store = createStore(rootReducer, initialState);

export { store as default };