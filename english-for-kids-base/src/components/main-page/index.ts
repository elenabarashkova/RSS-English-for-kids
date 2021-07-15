import { getMainPageInner } from "./render";
import { getCategories } from "../../server/categories";
import { ServerCategoryList } from "../admin-panel/types";
import store from "../../redux/store";


export const renderMainPage = (categoriesList: ServerCategoryList): void => {
  const mainWrap = document.getElementById('mainWrap') as HTMLElement;

  if(mainWrap) {
    mainWrap.innerHTML = '';
  }

  mainWrap?.insertAdjacentHTML('beforeend', getMainPageInner(categoriesList));
}

export const startMainPage = (): void => {
  // renderMainPage(store.getState().categoriesList);
}