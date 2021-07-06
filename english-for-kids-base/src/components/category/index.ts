import { getCategoryInner } from "./render";
import { categoriesListConfig } from "../main-page/categories-config";
import { getHash, redirectToDefaultPage } from "../../shared";

export const startCategoryPage = (): void => {
  const mainWrap = document.getElementById('mainWrap') as HTMLElement;

  const [, currentCategory] = getHash();
  const currentCategoryWords = categoriesListConfig[currentCategory]?.wordsConfig;

  if(currentCategoryWords) {
    mainWrap?.insertAdjacentHTML('beforeend', getCategoryInner(currentCategoryWords));
  } else {
    redirectToDefaultPage();
  }
}