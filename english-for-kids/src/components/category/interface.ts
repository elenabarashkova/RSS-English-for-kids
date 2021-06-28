interface Word {
  word: string,
  name: string,
  translation: string,
  imageUrl: string,
  sound?: string,
}

interface WordsListConfig extends Array<Word> {}