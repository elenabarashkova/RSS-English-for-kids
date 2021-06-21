interface Word {
  name: string,
  imageUrl: string,
  sound?: string,
}

interface WordsListConfig extends Record<string, Word> {}