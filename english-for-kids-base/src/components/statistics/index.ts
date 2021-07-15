import { getStatisticsPageInner } from "./render";
import { sortStat } from "./sort";
import { renderStatisticTable } from "./stat-table";

export const startStatisticsPage = (): void => {
  const mainWrap = document.getElementById('mainWrap') as HTMLElement;

  mainWrap?.insertAdjacentHTML('beforeend', getStatisticsPageInner());
  renderStatisticTable();
  sortStat();
}