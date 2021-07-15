import { StatisticConfig, StatisticWord } from "./types";
import { STAT_PROPS } from "./constants";

const getWordBlock = (
  {category_id,
    id,
    name,
    translation,
    trainedNum,
    guestedNum,
    mistakesNum,
    successRate}: StatisticWord,): string => (`
  <div id=${id} class="stat-word-wrap">
    <div class="category-title stat-word-item">${category_id}</div>
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
        <div data-sort=${STAT_PROPS.CATEGORY} class="category-title stat-word-item">Category</div>
        <div data-sort=${STAT_PROPS.NAME} class="word-title stat-word-item">Name</div>
        <div data-sort=${STAT_PROPS.TRANSLATION} class="translation-title stat-word-item">Translation</div>
        <div data-sort=${STAT_PROPS.TRAINED_NUM} class="trained-stat stat-word-item">Trained</div>
        <div data-sort=${STAT_PROPS.GUESTED_NUM} class="guessed-stat stat-word-item">Guessed</div>
        <div data-sort=${STAT_PROPS.MISTAKES_NUM} class="mistakes-stat stat-word-item">Wrong</div>
        <div data-sort=${STAT_PROPS.SUCCESS_RATE} class="success-stat stat-word-item">%</div>
      </div>
      <div id="statTableInner" class="stat-table-inner"></div>
    </div>
  </div>
`)