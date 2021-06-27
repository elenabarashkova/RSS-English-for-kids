interface Word {
  name: string,
  translation: string,
  imageUrl: string,
  sound?: string,
}

interface WordsListConfig extends Record<string, Word> {}