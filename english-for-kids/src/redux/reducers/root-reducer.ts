import { combineReducers } from "redux";
import { gameReducer } from "./game-reducer";
import { currentPageReducer } from "./common-reducer";

export const rootReducer = combineReducers({
  currentPage: currentPageReducer,
  game: gameReducer,
});