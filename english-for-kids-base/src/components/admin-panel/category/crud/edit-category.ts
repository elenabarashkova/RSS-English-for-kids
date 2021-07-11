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

      // const input = card.querySelector('input') as HTMLInputElement;
      // const createBtn = card.querySelector('.new-cat-create');
      // const cancelBtn = card.querySelector('.new-cat-cancel');

      card.addEventListener('click', async(innerEvent: Event) => {
        editModeCardHandler(false, innerEvent, card)
        // const thisTarget = innerEvent.target as HTMLElement;
        //
        // if(thisTarget === createBtn) {
        //   const thisCategory: ServerCategory = await getCategory(cardId);
        //   const updatedCategory: ServerCategory = {... thisCategory, name: input?.value};
        //   updateCategory(updatedCategory);
        //
        //   card.classList.remove('updating');
        // }
        // if(thisTarget === cancelBtn) {
        //   card.classList.remove('updating');
        // }
      });
    }
  }, {once: true}))
}