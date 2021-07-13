import { ServerCategoryList, ServerWordList } from "../components/admin-panel/types";

export interface Action <PayloadType = string> {
  type: string,
  payload: PayloadType,
}
export type Payload =
  number
  | string
  | boolean
  | WordsListConfig
  | Word
  | null
  | ServerCategoryList;

export interface GameState {
  gameMode: string,
  isGameStarted: boolean,
  wordsInPlay: WordsListConfig,
  currentWord: Word | null,
  mistakesCount: number,
}

export interface State {
  currentPage: string,
  currentCategory: string | null,
  game: GameState,
  categoriesList: ServerCategoryList,
  wordsList: ServerWordList,
}