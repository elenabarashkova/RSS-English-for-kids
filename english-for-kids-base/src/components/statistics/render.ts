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

export const getStatisticsPageInner = (statisticConfig: StatisticConfig): string => (`
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
        ${statisticConfig.map((word: StatisticWord) => getWordBlock(word)).join('')}
      </div>
    </div>
  </div>
`)