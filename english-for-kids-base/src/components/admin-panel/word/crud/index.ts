import { postNewCategory } from "../../../../server/categories";

export const addNewWord = (name: string, translation: string, imageurl: string, soundurl: string, category_id: string): void => {
  const newId = name.toLowerCase().trim().split(' ').join('');

  const newWord = {
    name,
    id: newId,
    translation,
    imageurl,
    soundurl,
    category_id
  }

  postNewCategory(newWord);
}