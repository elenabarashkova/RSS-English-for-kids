import { Action } from "redux";

export type Payload =
  number
  | string
  | boolean
  | WordsListConfig
  | Word
  | null;

export interface ActionWithPayload extends Action {
  payload: Payload,
}

export interface State {
  currentPage: string,
  gameMode: string,
  isGameStarted: boolean,
  wordsInPlay: WordsListConfig,
  currentWord: Word | null,
  mistakesCount: number,
}