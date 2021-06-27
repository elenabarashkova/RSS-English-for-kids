import { Action, combineReducers } from 'redux'
import { GAME_MODES } from "../shared/constants";
import { SET_CURRENT_PAGE, START_GAME, STOP_GAME, TOGGLE_GAME_MODE } from "./action-types";
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
  wordsInPlay: {},
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
    return {
      ... state,
      isGameStarted: true,
      wordsInPlay: (action as ActionWithPayload).payload,
    }
  }
  if (action.type === STOP_GAME) {
    return {... state, isGameStarted: false}
  }
  return state
}

export const rootReducer = combineReducers({
  currentPage: currentPageReducer,
  game: gameReducer,
});