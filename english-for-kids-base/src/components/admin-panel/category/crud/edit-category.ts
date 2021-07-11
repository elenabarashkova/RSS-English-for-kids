import { deleteCategory } from "../../../../server";
import { editModeCardHandler } from "./index";

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

      card.addEventListener('click', async(innerEvent: Event) => editModeCardHandler(false, innerEvent, card));
    }
  }))
}