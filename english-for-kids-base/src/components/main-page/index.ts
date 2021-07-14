import { getMainPageInner } from "./render";
import { getCategories } from "../../server/categories";
import { ServerCategoryList } from "../admin-panel/types";


export const renderMainPage = (categoriesList: ServerCategoryList): void => {
  const mainWrap = document.getElementById('mainWrap') as HTMLElement;
  mainWrap?.insertAdjacentHTML('beforeend', getMainPageInner(categoriesList));
}

export const startMainPage = (): void => {
  getCategories();
}