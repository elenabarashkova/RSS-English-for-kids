import { getMainPageInner } from "./render";
import { categoriesListConfig } from "./categories-config";

export const startMainPage = (): void => {
  const mainWrap = document.getElementById('mainWrap') as HTMLElement;

  mainWrap?.insertAdjacentHTML('beforeend', getMainPageInner(categoriesListConfig));
}

export const stopMainPage = (): void => {

}