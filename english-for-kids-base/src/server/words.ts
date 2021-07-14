import store from "../redux/store";
import { setWordsListAction } from "../redux/actions";
import { SERVER_PATH } from "./constants";
import { ServerWord } from "../components/admin-panel/types";

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

  try {
    await fetch(`${SERVER_PATH}words`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newWord),
    });

    getWords(categoryId);

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

  } catch(error) {
    alert('Error deleting the word. Please, try again');
  }
};

export const updateWord = async (updatedWord: ServerWord):Promise<void> => {
  const wordId = updatedWord.id;
  const categoryId = store.getState().currentCategory;

  try {
    await fetch(`${SERVER_PATH}words/${wordId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedWord),
    });

    getWords(categoryId);

  } catch(error) {
    alert('Error updating the word. Please, try again');
  }
}