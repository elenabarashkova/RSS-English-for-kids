import { Action } from "redux";
import { GAME_MODES } from "../../shared/constants";
import { MISTAKES_COUNT, NEXT_CURRENT_WORD, START_GAME, STOP_GAME, TOGGLE_GAME_MODE } from "../action-types";
import { ActionWithPayload } from "../types";

const initialGameState = {
  gameMode: GAME_MODES.TRAIN,
  isGameStarted: false,
  wordsInPlay: [],
  currentWord: null,
  mistakesCount: 0,
}

export const gameReducer = (state = initialGameState, action: Action) => {
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
    return {
      ... state,
      isGameStarted: false,
      mistakesCount: 0
    }
  }
  if (action.type === NEXT_CURRENT_WORD) {
    state.wordsInPlay.shift();
    const nextCurrentWord = state.wordsInPlay[0];

    return {
      ... state,
      currentWord: nextCurrentWord
    }
  }
  if (action.type === MISTAKES_COUNT) {
    return {
      ... state,
      mistakesCount: state.mistakesCount + 1
    }
  }
  return state
}