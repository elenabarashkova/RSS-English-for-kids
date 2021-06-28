import { Action, combineReducers } from 'redux'
import { GAME_MODES } from "../shared/constants";
import {
  NEXT_CURRENT_WORD,
  SET_CURRENT_PAGE,
  START_GAME,
  STOP_GAME,
  TOGGLE_GAME_MODE
} from "./action-types";
import { DEFAULT_PAGE } from "../shared";
import { ActionWithPayload } from "./interface";

const currentPageReducer = (state = DEFAULT_PAGE, action: ActionWithPayload) => {
  if (action.type === SET_CURRENT_PAGE) {
    return (action.payload)
  }
  return state
}

const initialGameState = {
  gameMode: GAME_MODES.TRAIN,
  isGameStarted: false,
  wordsInPlay: [],
  currentWord: null,
}

const gameReducer = (state = initialGameState, action: Action) => {
  if (action.type === TOGGLE_GAME_MODE) {
    const newGameMode = state.gameMode === GAME_MODES.TRAIN ? GAME_MODES.GAME : GAME_MODES.TRAIN;

    return {
      ... state,
      gameMode: newGameMode,
      isGameStarted: (newGameMode === GAME_MODES.TRAIN ? false : state.isGameStarted)
    }
  }
  if (action.type === START_GAME && state.gameMode === GAME_MODES.GAME) {
    const currentWords = (action as ActionWithPayload).payload;
    let firstWord;

    if(currentWords) {
      [firstWord] = currentWords;
    }
    return {
      ... state,
      isGameStarted: true,
      wordsInPlay: currentWords,
      currentWord: firstWord,
    }
  }
  if (action.type === STOP_GAME) {
    return {... state, isGameStarted: false}
  }
  if (action.type === NEXT_CURRENT_WORD) {
    state.wordsInPlay.shift();
    const nextCurrentWord = state.wordsInPlay[0];
    return {... state, currentWord: nextCurrentWord }
  }
  return state
}

export const rootReducer = combineReducers({
  currentPage: currentPageReducer,
  game: gameReducer,
});