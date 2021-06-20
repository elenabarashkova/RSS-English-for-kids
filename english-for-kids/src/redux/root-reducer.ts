import { Action, combineReducers } from 'redux'
import { GAME_MODES } from "../shared/constants";
import { TOGGLE_GAME_MODE } from "./action-types";

function gameModeReducer(state = GAME_MODES.TRAIN, action: Action) {
  if (action.type === TOGGLE_GAME_MODE) {
    return state === GAME_MODES.TRAIN ? GAME_MODES.GAME : GAME_MODES.TRAIN;
  }
  return state
}

export const rootReducer = combineReducers({
  gameMode: gameModeReducer,
});