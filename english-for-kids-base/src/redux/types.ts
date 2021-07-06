export interface ActionWithPayload <PayloadType = string> {
  type: string,
  payload: PayloadType,
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