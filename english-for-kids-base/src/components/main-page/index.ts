import { getMainPageInner } from "./render";
import { getCategories } from "../../server/categories";
import { ServerCategory, ServerCategoryList } from "../admin-panel/types";
import { setCategoryPictureAction } from "../../redux/actions";


export const renderMainPage = (categoriesList: ServerCategoryList): void => {
  const mainWrap = document.getElementById('mainWrap') as HTMLElement;
  mainWrap?.insertAdjacentHTML('beforeend', getMainPageInner(categoriesList));
}

export const startMainPage = (): void => {
  getCategories();
}