import { getStatWords } from "./render";
import { getStatistics } from "./indexedDB";

export const renderStatisticTable = async (sortDirection = 'down', sortType = ''): Promise<void> => {
  const statTableInner = document.getElementById('statTableInner');
  const statisticConfig = await getStatistics();

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