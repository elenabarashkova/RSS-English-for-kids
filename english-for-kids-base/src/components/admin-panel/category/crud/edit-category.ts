import { deleteCategory, getCategory, updateCategory } from "../../../../server";
import { ServerCategory } from "../../types";

export const editModeCardHandler = async (event: Event, card: Element): Promise<void> => {
  const input = card.querySelector('input') as HTMLInputElement;
  const createBtn = card.querySelector('.new-cat-create');
  const cancelBtn = card.querySelector('.new-cat-cancel');
  const cardId = card.id;

  const target = event.target as HTMLElement;

  if(target === createBtn) {

    const thisCategory: ServerCategory = await getCategory(cardId);
    const updatedCategory: ServerCategory = {... thisCategory, name: input?.value};

    updateCategory(updatedCategory);

    card.classList.remove('updating');
  }

  if(target === cancelBtn) {
    card.classList.remove('updating');
  }
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

      card.addEventListener('click', async(innerEvent: Event) => {
        editModeCardHandler(innerEvent, card);
      });
    }
  }))
}