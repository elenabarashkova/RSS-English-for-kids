import { ServerCategory, ServerCategoryList } from "../../types";
import { deleteCategory, getCategory, postNewCategory, updateCategory } from "../../../../server";
import { setCreateCatFormAction } from "../../../../redux/actions";
import { renderCateroryCards } from "../render";

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

export const editCategoryBehavior = (): void => {
  const adminCategoryCards = document.getElementsByClassName('admin-category-card');

  [...adminCategoryCards].forEach(card => card.addEventListener('click', (event: Event) => {
    const { target } = event;
    const cardId = card.id;

    const deleteBtn = card.querySelector('.delete-btn');
    const updateBtn = card.querySelector('.update-cat-btn');

    if(target === deleteBtn) {
      deleteCategory(cardId);
    }

    if(target === updateBtn) {
      card.classList.add('updating');

      const input = card.querySelector('input') as HTMLInputElement;
      const createBtn = card.querySelector('.new-cat-create');
      const cancelBtn = card.querySelector('.new-cat-cancel');

      card.addEventListener('click', async(innerEvent: Event) => {

        const thisTarget = innerEvent.target as HTMLElement;

        if(thisTarget === createBtn) {
          const thisCategory: ServerCategory = await getCategory(cardId);
          const updatedCategory: ServerCategory = {... thisCategory, name: input?.value};
          updateCategory(updatedCategory);

          card.classList.remove('updating');
        }
        if(thisTarget === cancelBtn) {
          card.classList.remove('updating');
        }
      });
    }
  }, {once: true}))
}