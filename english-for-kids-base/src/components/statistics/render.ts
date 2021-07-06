const getWordBlock = (
  categoryName:string,
  {word, name, translation}: Word,
  trainedNum = 0,
  guestedNum = 0,
  mistakesNum = 0,
  successRate = 0,
): string => (`
  <div id=${word} class="stat-word-wrap">
    <div class="category-title stat-word-item">${categoryName}</div>
    <div class="word-title stat-word-item">${name}</div>
    <div class="translation-title stat-word-item">${translation}</div>
    <div class="trained-stat stat-word-item">${trainedNum}</div>
    <div class="guessed-stat stat-word-item">${guestedNum}</div>
    <div class="mistakes-stat stat-word-item">${mistakesNum}</div>
    <div class="success-stat stat-word-item">${successRate}</div>
  </div>
`)

export const getStatisticsPageInner = (categoriesConfig: CategoriesListConfig): string => (`
  <div id="statisticsPage" class="statistics-page">
    <div id="statTable" class="stat-table">
      <div class="stat-table-header">
        <div class="category-title stat-word-item">Category</div>
        <div class="word-title stat-word-item">Name</div>
        <div class="translation-title stat-word-item">Translation</div>
        <div class="trained-stat stat-word-item">Trained</div>
        <div class="guessed-stat stat-word-item">Guessed</div>
        <div class="mistakes-stat stat-word-item">Wrong</div>
        <div class="success-stat stat-word-item">%</div>
      </div>
      <div class="stat-table-inner">
    ${(Object.keys(categoriesConfig))
    .map((category: string) => (categoriesConfig[category].wordsConfig
      .map(word => getWordBlock(category, word))
      .join('')))
    .join('')}
      </div>
    </div>
  </div>
`)