import { combineReducers } from "redux";
import { gameReducer } from "./game-reducer";
import { currentCategoryReducer, currentPageReducer } from "./common-reducer";
import {
  allWordsListReducer,
  categoriesListReducer,
  creatingCategoryReducer, creatingWordReducer,
  wordsListReducer
} from "./server-reducer";

export const rootReducer = combineReducers({
  currentPage: currentPageReducer,
  game: gameReducer,
  currentCategory: currentCategoryReducer,
  categoriesList: categoriesListReducer,
  wordsList: wordsListReducer,
  allWordsList: allWordsListReducer,
  creatingCategory: creatingCategoryReducer,
  creatingWord: creatingWordReducer,
});