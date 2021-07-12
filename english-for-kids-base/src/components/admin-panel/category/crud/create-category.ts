import { setCreateCatFormAction } from "../../../../redux/actions";
import { addNewCategory } from "./index";

export const createCategoryBehavior = (): void => {
  const createCategoryBtn = document.getElementById('createCategoryCard');

  createCategoryBtn?.addEventListener('click', () => {
    setCreateCatFormAction(true);

    const newCatCards = document.getElementsByClassName('new-cat-card');

    [...newCatCards].forEach((card) => card.addEventListener('click', (event: Event) => {

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