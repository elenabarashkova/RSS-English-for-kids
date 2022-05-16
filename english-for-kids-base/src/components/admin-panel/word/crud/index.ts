import { postNewWord } from "../../../../server/words";

export const addNewWord = (
  name: string,
  translation: string,
  imageurl: Blob | null,
  soundurl: Blob | null,
  category_id: string): void => {
  const newId = name.toLowerCase().trim().split(' ').join('');

  const newWord = {
    name,
    id: newId,
    translation,
    imageurl,
    soundurl,
    category_id
  }

  postNewWord(newWord);
}