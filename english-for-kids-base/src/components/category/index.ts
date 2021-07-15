import { getCategoryInner } from "./render";
import { getHash, redirectToDefaultPage } from "../../shared";
import { getAllWords, getWords } from "../../server/words";
import { ServerWordList } from "../admin-panel/types";

export const renderCategoryPage = (wordsList: ServerWordList): void => {
  const mainWrap = document.getElementById('mainWrap') as HTMLElement;

  mainWrap?.insertAdjacentHTML('beforeend', getCategoryInner(wordsList));
}

export const startCategoryPage = (): void => {
  const [, currentCategory] = getHash();

  if(!currentCategory) {
    redirectToDefaultPage();
  }

  getWords(currentCategory);
  getAllWords();
}