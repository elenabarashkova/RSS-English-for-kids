import { postNewCategory } from "../../../../server/categories";

export const addNewCategory = (name: string): void => {
  const newId = name.toLowerCase().trim().split(' ').join('');

  const newCategory = {
    name,
    id: newId,
  }

  postNewCategory(newCategory);
}