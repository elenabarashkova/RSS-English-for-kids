import { combineReducers } from "redux";
import { gameReducer } from "./game-reducer";
import { currentCategoryReducer, currentPageReducer } from "./common-reducer";
import { categoriesListReducer } from "./server-reducer";

export const rootReducer = combineReducers({
  currentPage: currentPageReducer,
  game: gameReducer,
  currentCategory: currentCategoryReducer,
  categoriesList: categoriesListReducer,
});