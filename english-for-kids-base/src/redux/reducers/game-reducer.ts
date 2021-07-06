import { GAME_MODES } from "../../shared/constants";
import {
  IS_GAME_STARTED,
  MISTAKES_COUNT,
  SET_CURRENT_WORD,
  SET_WORDS_IN_PLAY,
  TOGGLE_GAME_MODE
} from "../action-types";
import { Action, State } from "../types";

export const gameModeReducer = (
  state = GAME_MODES.TRAIN,
  action: Action
): State['gameMode'] => {
  if (action.type === TOGGLE_GAME_MODE) {
    return state === GAME_MODES.TRAIN ? GAME_MODES.GAME : GAME_MODES.TRAIN;
  }

  return state
}

export const isGameStartedReducer = (
  state = false,
  {type, payload}: Action<boolean>
): State['isGameStarted'] => {
  if (type === IS_GAME_STARTED) {
    return payload;
  }

  return state
}

export const mistakesCountReducer = (
  state = 0,
  {type, payload}: Action<boolean>
): State['mistakesCount'] => {
  if (type === MISTAKES_COUNT) {
    return payload ? (state + 1) : 0;
  }

  return state
}

export const wordsInPlayReducer = (
  state = [],
  {type, payload}: Action<WordsListConfig>
): State['wordsInPlay'] => {
  if (type === SET_WORDS_IN_PLAY) {
    return payload;
  }

  return state
}

export const currentWordReducer = (
  state = null,
  {type, payload}: Action<Word>
): State['currentWord'] => {
  if (type === SET_CURRENT_WORD) {
    return payload;
  }

  return state
}