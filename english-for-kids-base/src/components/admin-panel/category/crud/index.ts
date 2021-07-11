import { ServerCategory } from "../../types";
import { getCategory, postNewCategory, updateCategory } from "../../../../server";
import { setCreateCatFormAction } from "../../../../redux/actions";

export const addNewCategory = (name: string): void => {
  const newId = name.toLowerCase().trim().split(' ').join('');

  const newCategory = {
    name,
    id: newId,
  }

  postNewCategory(newCategory);
}

export const editModeCardHandler = async (isCreateMode: boolean, event: Event, card: Element): Promise<void> => {
  const input = card.querySelector('input') as HTMLInputElement;
  const createBtn = card.querySelector('.new-cat-create');
  const cancelBtn = card.querySelector('.new-cat-cancel');
  const cardId = card.id;

  const target = event.target as HTMLElement;

  if(target === createBtn) {

    if(isCreateMode) {
      addNewCategory(input?.value);
    }

    const thisCategory: ServerCategory = await getCategory(cardId);
    const updatedCategory: ServerCategory = {... thisCategory, name: input?.value};

    updateCategory(updatedCategory);

    card.classList.remove('updating');
  }

  if(target === cancelBtn) {

    if(isCreateMode) {
      setCreateCatFormAction(false);
    }

    card.classList.remove('updating');
  }
}