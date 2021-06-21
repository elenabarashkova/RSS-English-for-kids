const getWordCard = ({ name, imageUrl }: Word) => (`
  <div class="category-card card">
    <img src=${imageUrl} alt=${name}>
    <div>${name}</div>
  </div>
`)

export const getCategoryInner = (currentCategoryWords: WordsListConfig): string => (`
  <div class="category-page card-wrap container">
    ${(Object.keys(currentCategoryWords)).map((word: string) => getWordCard(currentCategoryWords[word])).join('')}
  </div>
`)