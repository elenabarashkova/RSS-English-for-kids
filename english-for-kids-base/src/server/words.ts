import store from "../redux/store";
import { setAllWordsListAction, setWordsListAction } from "../redux/actions";
import { SERVER_PATH } from "./constants";
import { ServerWord } from "../components/admin-panel/types";

export const getAllWords = async (): Promise<void> => {
  const response = await fetch(`${SERVER_PATH}words`);
  const result = await response.json();

  setAllWordsListAction(result);
}

export const getWords = async (category: string): Promise<void> => {
  const response = await fetch(`${SERVER_PATH}words/${category}`);
  const result = await response.json();

  setWordsListAction(result);
}

export const getWord = async (id: string): Promise<ServerWord> => {
  const response = await fetch(`${SERVER_PATH}words/${id}`);
  return response.json();
}

export const postNewWord = async (newWord: ServerWord): Promise<void> => {
  const categoryId = store.getState().currentCategory;
  const formData = new FormData();

  formData.append('id', newWord.id);
  formData.append('name', newWord.name);
  formData.append('translation', newWord.translation);
  formData.append('imageurl', newWord.imageurl as Blob);
  formData.append('soundurl', newWord.soundurl as Blob);
  formData.append('category_id', categoryId);

  try {
    await fetch(`${SERVER_PATH}words`, {
      method: 'POST',
      body: formData,
    });

    getWords(categoryId);
    getAllWords();

  } catch(error) {
    alert('Error creating the Word. Please, try again');
  }
};

export const deleteWord = async (id: string): Promise<void> => {
  const categoryId = store.getState().currentCategory;

  try {
    await fetch(`${SERVER_PATH}words/${id}`, {
      method: 'DELETE',
    });

    getWords(categoryId);
    getAllWords();

  } catch(error) {
    alert('Error deleting the word. Please, try again');
  }
};

export const updateWord = async (updatedWord: ServerWord, id: string):Promise<void> => {
  const categoryId = store.getState().currentCategory;

  const formData = new FormData();

  formData.append('name', updatedWord.name);
  formData.append('translation', updatedWord.translation);
  if (updatedWord.imageurl) {
    formData.append('imageurl', updatedWord.imageurl as Blob);
  }
  if (updatedWord.soundurl) {
    formData.append('soundurl', updatedWord.soundurl as Blob);
  }

  try {
    await fetch(`${SERVER_PATH}words/${id}`, {
      method: 'PUT',
      body: formData,
    });

    getWords(categoryId);
    getAllWords();

  } catch(error) {
    alert('Error updating the word. Please, try again');
  }
}