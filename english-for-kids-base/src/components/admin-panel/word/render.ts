import { ServerCategoryList } from "../types";

export const renderWordsCards = (serverCatList: ServerCategoryList): string => (`
  <div id="adminCardWrap" class="admin-categiries-wrap">
    
  </div>
`);

export const renderAllWordsCards = (cats: ServerCategoryList): void => {
  const adminPanelPageInner = document.getElementById('adminPanelPageInner');

  if(adminPanelPageInner) {
    adminPanelPageInner.innerHTML = '';
  }
  adminPanelPageInner?.insertAdjacentHTML('beforeend', renderWordsCards(cats));
}