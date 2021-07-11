import { initPublicPageTemplate, stopPublicPageTemplate } from "../index";
import { getAdminPanelInner } from "./render";
import { redirectToDefaultPage } from "../../shared";
import { renderCateroryCards } from "./category/render-card";
import { getCategories, postNewCategory } from "../../server";
import { ServerCategoryList } from "./types";
import { setCreateCatFormAction } from "../../redux/actions";

export const renderAllCatCards = (cats: ServerCategoryList): void => {
  const adminPanelPageInner = document.getElementById('adminPanelPageInner');

  if(adminPanelPageInner) {
    adminPanelPageInner.innerHTML = '';
  }
  adminPanelPageInner?.insertAdjacentHTML('beforeend', renderCateroryCards(cats));
}

export const addNewCategory = (name: string): void => {
  const newId = name.toLowerCase().trim().split(' ').join('');
  const newCategory = {
    name,
    id: newId,
  }
  postNewCategory(newCategory);
}

export const createCategoryBehavior = (): void => {
  const createCategoryCard = document.getElementById('createCategoryCard');

  createCategoryCard?.addEventListener('click', () => {
    setCreateCatFormAction(true);

    const newCatCards = document.getElementsByClassName('new-cat-card');
    [...newCatCards].forEach(card => card.addEventListener('click', (event: Event) => {
      const input = card.querySelector('input') as HTMLInputElement;
      const createBtn = card.querySelector('.new-cat-create');
      const cancelBtn = card.querySelector('.new-cat-cancel');

      const target = event.target as HTMLElement;

      if(target === createBtn) {
        addNewCategory(input?.value);
      }
      if(target === cancelBtn) {
        setCreateCatFormAction(false);
      }
    }))
  }, {once: true})
}

// export const deleteCategoryBehavior = (): void => {
//   const adminCategoryCards = document.getElementsByClassName('admin-category-card');
//
//   createCategoryCard?.addEventListener('click', () => {
//
//     addNewCategory('lena lena');
//   }, {once: true})
// }

export const startAdminPanel = async (): Promise<void> => {
  stopPublicPageTemplate();

  const mainWrap = document.getElementById('mainWrap') as HTMLElement;

  mainWrap?.insertAdjacentHTML('beforeend', getAdminPanelInner());
  getCategories();

  const logoutBtn = document.getElementById('logoutBtn');
  logoutBtn?.addEventListener('click', () => {
    // stop admin pagetemplate ?
    redirectToDefaultPage();
    initPublicPageTemplate();
  });

}

export const startAdminCards = (allCats: ServerCategoryList, ): void => {
  renderAllCatCards(allCats);
  createCategoryBehavior();
}