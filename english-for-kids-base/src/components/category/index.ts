import { getCategoryInner } from "./render";
import { getHash, redirectToDefaultPage } from "../../shared";
import { getWords } from "../../server/words";
import { ServerWordList } from "../admin-panel/types";
import { startBehaviorTrain } from "../game-mode/train-mode";
import store from "../../redux/store";

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

  // renderCategoryPage(store.getState().wordsList);
  // startBehaviorTrain();
}