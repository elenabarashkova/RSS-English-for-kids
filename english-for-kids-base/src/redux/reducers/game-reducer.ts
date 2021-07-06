import { GAME_MODES } from "../../shared/constants";
import {
  IS_GAME_STARTED,
  MISTAKES_COUNT,
  SET_CURRENT_WORD,
  SET_WORDS_IN_PLAY,
  TOGGLE_GAME_MODE
} from "../action-types";
import { Action, GameState, Payload } from "../types";

const gameInitialState: GameState = {
  gameMode: GAME_MODES.TRAIN,
  isGameStarted: false,
  wordsInPlay: [],
  currentWord: null,
  mistakesCount: 0,
}

export const gameReducer = (
  state = gameInitialState,
  {type, payload}: Action<Payload>
): GameState => {
  switch (type) {
    case TOGGLE_GAME_MODE:
      return {
        ...state,
        gameMode: state.gameMode === GAME_MODES.TRAIN ? GAME_MODES.GAME : GAME_MODES.TRAIN
      }
    case IS_GAME_STARTED:
      return {
        ...state,
        isGameStarted: payload as boolean
      }
    case MISTAKES_COUNT:
      return {
        ...state,
        mistakesCount: (payload ? (state.mistakesCount + 1) : 0) as number
      }
    case SET_WORDS_IN_PLAY:
      return {
        ...state,
        wordsInPlay: payload as WordsListConfig
      }
    case SET_CURRENT_WORD:
      return {
        ...state,
        currentWord: payload as Word
      }

    default: return state
  }
}