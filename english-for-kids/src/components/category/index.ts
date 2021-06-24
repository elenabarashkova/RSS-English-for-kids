import { getCategoryInner } from "./render";
import { categoriesListConfig } from "../main-page/categories-config";
import { redirectToDefaultPage } from "../../shared";

export const startCategoryPage = (): void => {
  const mainWrap = document.getElementById('mainWrap') as HTMLElement;

  const currentCategory = window.location.hash.slice(1).split('/')[1];
  const currentCategoryWords = categoriesListConfig[currentCategory]?.wordsConfig;

  if(currentCategoryWords) {
    mainWrap?.insertAdjacentHTML('beforeend', getCategoryInner(currentCategoryWords));
  } else {
    redirectToDefaultPage();
  }
}

export const stopCategoryPage = (): void => {

}