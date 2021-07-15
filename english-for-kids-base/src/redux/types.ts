import { ServerCategoryList, ServerWord, ServerWordList } from "../components/admin-panel/types";

export interface Action <PayloadType = string> {
  type: string,
  payload: PayloadType,
}
export type Payload =
  number
  | string
  | boolean
  | ServerWordList
  | ServerWord
  | null
  | ServerCategoryList;

export interface GameState {
  gameMode: string,
  isGameStarted: boolean,
  wordsInPlay: ServerWordList,
  currentWord: ServerWord | null,
  mistakesCount: number,
}

export interface State {
  currentPage: string,
  currentCategory: string | null,
  game: GameState,
  categoriesList: ServerCategoryList,
  wordsList: ServerWordList,
  allWordsList: ServerWordList,
}