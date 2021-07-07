import { StatisticConfig, StatisticWord } from "./types";
import { categoriesListConfig } from "../main-page/categories-config";
import { getStatWords } from "./render";

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

export const renderStatisticTable = (sortDirection = 'down', sortType = ''): void => {
  const statTableInner = document.getElementById('statTableInner');
  const statisticConfig = getStatisticConfig(categoriesListConfig);

  if(statTableInner) {
    statTableInner.innerHTML = '';
  }

  if(sortType) {
    statisticConfig.sort((item1, item2) => {
      if (item1[sortType] < item2[sortType]) {
        return sortDirection === 'up' ? 1 : -1;
      }
      if (item1[sortType] > item2[sortType]) {
        return sortDirection === 'up' ? -1 : 1;
      }
      return 0;
    })
  }

  statTableInner?.insertAdjacentHTML('beforeend', getStatWords(statisticConfig));
}