import { Action } from "redux";

export interface ActionWithPayload extends Action {payload?: string | WordsListConfig}

export interface GameState {
  gameMode: string,
  isGameStarted: boolean,
  wordsInPlay: WordsListConfig,
  currentWord: Word,
  mistakesCount: 0,
}