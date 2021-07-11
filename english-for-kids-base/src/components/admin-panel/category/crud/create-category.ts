import { setCreateCatFormAction } from "../../../../redux/actions";
import { editModeCardHandler } from "./index";

export const createCategoryBehavior = (): void => {
  const createCategoryBtn = document.getElementById('createCategoryCard');

  createCategoryBtn?.addEventListener('click', () => {
    setCreateCatFormAction(true);

    const newCatCards = document.getElementsByClassName('new-cat-card');

    [...newCatCards].forEach((card) => card.addEventListener('click', (event: Event) => {

      editModeCardHandler(true, event, card);
    }))
  }, {once: true})
}