import { Action } from "redux";
import { GAME_MODES } from "../../shared/constants";
import {
  CHANGE_WORDS_IN_PLAY, IS_GAME_STARTED,
  MISTAKES_COUNT,
  SET_CURRENT_WORD,
  SET_WORDS_IN_PLAY,
  TOGGLE_GAME_MODE
} from "../action-types";
import { ActionWithPayload, State } from "../types";

export const gameModeReducer = (state = GAME_MODES.TRAIN, action: Action): State['gameMode'] => {
  if (action.type === TOGGLE_GAME_MODE) {
    return state === GAME_MODES.TRAIN ? GAME_MODES.GAME : GAME_MODES.TRAIN;
  }

  return state
}

export const isGameStartedReducer = (state = false, {type, payload}: ActionWithPayload): State['isGameStarted'] => {
  if (type === IS_GAME_STARTED) {
    return payload as boolean;
  }

  return state
}

export const mistakesCountReducer = (state = 0, action: ActionWithPayload): State['mistakesCount'] => {
  if (action.type === MISTAKES_COUNT) {
    return action.payload ? (state + 1) : 0;
  }

  return state
}

export const wordsInPlayReducer = (state = [], action: ActionWithPayload): State['wordsInPlay'] => {
  if (action.type === SET_WORDS_IN_PLAY) {
    return action.payload as WordsListConfig;
  }
  if (action.type === CHANGE_WORDS_IN_PLAY) {
    state?.shift();
    return state;
  }

  return state
}

export const currentWordReducer = (state = null, action: ActionWithPayload): State['currentWord'] => {
  if (action.type === SET_CURRENT_WORD) {
    return action.payload as Word;
  }

  return state
}