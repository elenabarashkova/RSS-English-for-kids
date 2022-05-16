import { getMainPageInner } from "./render";
import { ServerCategoryList } from "../admin-panel/types";


export const renderMainPage = (categoriesList: ServerCategoryList): void => {
  const mainWrap = document.getElementById('mainWrap') as HTMLElement;

  if(mainWrap) {
    mainWrap.innerHTML = '';
  }

  mainWrap?.insertAdjacentHTML('beforeend', getMainPageInner(categoriesList));
}

export const startMainPage = (): void => {
}