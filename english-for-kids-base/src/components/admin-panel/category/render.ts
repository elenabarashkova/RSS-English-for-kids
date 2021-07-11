import { ServerCategory, ServerCategoryList } from "../types";
import { getCategoryCard } from "./get-cards/category";
import { getCreateCategoryCard } from "./get-cards/create-category";
import { getNewCategoryCard } from "./get-cards/new-category";

export const renderCategoryCards = (serverCatList: ServerCategoryList): string => (`
  <div id="adminCardWrap" class="admin-categiries-wrap">
    ${serverCatList.map((cat: ServerCategory) => {
    if(cat.isNewCategory) {
      return getNewCategoryCard();
    }
    return getCategoryCard(cat);
  }).join('')}
    ${getCreateCategoryCard()}
  </div>
`);

export const renderAllCatCards = (cats: ServerCategoryList): void => {
  const adminPanelPageInner = document.getElementById('adminPanelPageInner');

  if(adminPanelPageInner) {
    adminPanelPageInner.innerHTML = '';
  }
  adminPanelPageInner?.insertAdjacentHTML('beforeend', renderCategoryCards(cats));
}