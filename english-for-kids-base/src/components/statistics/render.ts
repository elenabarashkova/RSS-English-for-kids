import { StatisticConfig, StatisticWord } from "./types";

const getWordBlock = (
  {category,
    id,
    name,
    translation,
    trainedNum,
    guestedNum,
    mistakesNum,
    successRate}: StatisticWord,): string => (`
  <div id=${id} class="stat-word-wrap">
    <div class="category-title stat-word-item">${category}</div>
    <div class="word-title stat-word-item">${name}</div>
    <div class="translation-title stat-word-item">${translation}</div>
    <div class="trained-stat stat-word-item">${trainedNum}</div>
    <div class="guessed-stat stat-word-item">${guestedNum}</div>
    <div class="mistakes-stat stat-word-item">${mistakesNum}</div>
    <div class="success-stat stat-word-item">${successRate}</div>
  </div>
`)

export const getStatWords = (statisticConfig: StatisticConfig): string  => (
  statisticConfig.map((word: StatisticWord) => getWordBlock(word)).join('')
)

export const getStatisticsPageInner = (): string => (`
  <div id="statisticsPage" class="statistics-page">
    <div id="statTable" class="stat-table">
      <div id="statHeader" class="stat-table-header">
        <div data-sort="category" class="category-title stat-word-item">Category</div>
        <div data-sort="name" class="word-title stat-word-item">Name</div>
        <div data-sort="translation" class="translation-title stat-word-item">Translation</div>
        <div data-sort="trainedNum" class="trained-stat stat-word-item">Trained</div>
        <div data-sort="guestedNum" class="guessed-stat stat-word-item">Guessed</div>
        <div data-sort="mistakesNum" class="mistakes-stat stat-word-item">Wrong</div>
        <div data-sort="successRate" class="success-stat stat-word-item">%</div>
      </div>
      <div id="statTableInner" class="stat-table-inner">
        
      </div>
    </div>
  </div>
`)