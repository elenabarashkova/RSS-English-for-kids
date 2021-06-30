import { Action } from "redux";
import { GAME_MODES } from "../../shared/constants";
import {
  CHANGE_WORDS_IN_PLAY,
  MISTAKES_COUNT,
  SET_FIRST_WORD, SET_WORDS_IN_PLAY,
  START_GAME,
  STOP_GAME,
  TOGGLE_GAME_MODE
} from "../action-types";
import { ActionWithPayload } from "../types";

export const gameModeReducer = (state = GAME_MODES.TRAIN, action: Action) => {
  if (action.type === TOGGLE_GAME_MODE) {
    return state === GAME_MODES.TRAIN ? GAME_MODES.GAME : GAME_MODES.TRAIN;
  }
  return state
}

export const isGameStartedReducer = (state = false, action: Action) => {
  if (action.type === STOP_GAME) {
    return false;
  }
  if (action.type === START_GAME) {
    return true;
  }
  return state
}

export const mistakesCountReducer = (state = 0, action: Action) => {
  if (action.type === MISTAKES_COUNT) {
    return (action as ActionWithPayload).payload ? (state + 1) : 0;
  }
  return state
}

export const wordsInPlayReducer = (state = [], action: Action) => {
  if (action.type === SET_WORDS_IN_PLAY) {
    return (action as ActionWithPayload).payload;
  }
  if (action.type === CHANGE_WORDS_IN_PLAY) {
    state?.shift();
    return state;
  }
  return state
}

export const currentWordReducer = (state = null, action: Action) => {
  if (action.type === SET_FIRST_WORD) {
    return (action as ActionWithPayload).payload;
  }
  return state
}