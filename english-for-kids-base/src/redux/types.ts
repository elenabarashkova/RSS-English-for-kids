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
  currentCategory: string | null,
  gameMode: string,
  isGameStarted: boolean,
  wordsInPlay: WordsListConfig,
  currentWord: Word | null,
  mistakesCount: number,
}