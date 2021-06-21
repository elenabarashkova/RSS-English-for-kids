import { getMainPageInner } from "./render";
import { categoriesListConfig } from "./categories-config";

export const startMainPage = (): void => {
  const main = document.getElementById('main') as HTMLElement;

  main?.insertAdjacentHTML('beforeend', getMainPageInner(categoriesListConfig));
}

export const stopMainPage = (): void => {

}