import { getMainPageInner } from "./render";
import { categoriesListConfig } from "./constants";

export const startMainPage = (): void => {
  const main = document.getElementById('main') as HTMLElement;

  main?.insertAdjacentHTML('beforeend', getMainPageInner(categoriesListConfig));
}