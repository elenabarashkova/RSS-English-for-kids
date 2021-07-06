import { getStatisticsPageInner } from "./render";
import { categoriesListConfig } from "../main-page/categories-config";

export const startStatisticsPage = (): void => {
  const mainWrap = document.getElementById('mainWrap') as HTMLElement;

  mainWrap?.insertAdjacentHTML('beforeend', getStatisticsPageInner(categoriesListConfig));
}