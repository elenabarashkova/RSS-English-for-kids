import { getStatisticsPageInner } from "./render";
import { categoriesListConfig } from "../main-page/categories-config";
import { StatisticConfig, StatisticWord } from "./types";

const getStatisticConfig = (categoriesConfig: CategoriesListConfig) => {
  const statConfig: StatisticConfig = [];
  Object.keys(categoriesConfig)
    .forEach((category: string) => categoriesConfig[category].wordsConfig
      .forEach(({word, name, translation}: Word) => {
        const wordObj: StatisticWord = {
          category,
          id: word,
          name,
          translation,
          trainedNum: 0,
          guestedNum: 0,
          mistakesNum: 0,
          successRate: 0,
        }
        statConfig.push(wordObj);
      })
    );

  return statConfig;
}

const statisticConfig = getStatisticConfig(categoriesListConfig);

export const startStatisticsPage = (): void => {
  const mainWrap = document.getElementById('mainWrap') as HTMLElement;

  mainWrap?.insertAdjacentHTML('beforeend', getStatisticsPageInner(statisticConfig));
}