import { combineReducers } from "redux";
import {
  currentWordReducer,
  gameModeReducer,
  // gameReducer,
  isGameStartedReducer,
  mistakesCountReducer,
  wordsInPlayReducer
} from "./game-reducer";
import { currentPageReducer } from "./common-reducer";

export const rootReducer = combineReducers({
  currentPage: currentPageReducer,
  gameMode: gameModeReducer,
  mistakesCount: mistakesCountReducer,
  isGameStarted: isGameStartedReducer,
  wordsInPlay: wordsInPlayReducer,
  currentWord: currentWordReducer,
  // game: gameReducer,

});