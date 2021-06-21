const getWordCard = ({ name, imageUrl }: Category) => (`
  <a href="#category/${name}" class="category-card card">
    <img src=${imageUrl} alt=${name}>
    <div>${name}</div>
  </a>
`)

export const getCategoryInner = (wordsListConfigAnimals: WordsListConfig): string => (`
  <div class="category-page card-wrap container">
    ${(Object.keys(wordsListConfigAnimals)).map((word: string) => getWordCard(wordsListConfigAnimals[word])).join('')}
  </div>
`)