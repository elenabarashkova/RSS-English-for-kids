import store from "../redux/store";
import { setWordsListAction } from "../redux/actions";
import { SERVER_PATH } from "./constants";
import { ServerWord } from "../components/admin-panel/types";
import { getLogin } from "../components/indexedDB";

export const getWords = async (category: string): Promise<void> => {
  const currentToken = await getLogin();

  const response = await fetch(`${SERVER_PATH}words/${category}`, {
    headers: {
      'token': `${currentToken}`
    }
  });
  const result = await response.json();

  setWordsListAction(result);
}

export const getWord = async (id: string): Promise<ServerWord> => {
  const currentToken = await getLogin();

  const response = await fetch(`${SERVER_PATH}words/${id}`, {
    headers: {
      'token': `${currentToken}`
    }
  });
  return response.json();
}

export const postNewWord = async (newWord: ServerWord): Promise<void> => {
  const categoryId = store.getState().currentCategory;
  const formData = new FormData();
  const currentToken = await getLogin();

  formData.append('id', newWord.id);
  formData.append('name', newWord.name);
  formData.append('translation', newWord.translation);
  formData.append('imageurl', newWord.imageurl as Blob);
  formData.append('soundurl', newWord.soundurl as Blob);
  formData.append('category_id', categoryId);

  try {
    await fetch(`${SERVER_PATH}words`, {
      method: 'POST',
      headers: {
        'token': `${currentToken}`
      },
      body: formData,
    });

    getWords(categoryId);

  } catch(error) {
    alert('Error creating the Word. Please, try again');
  }
};

export const deleteWord = async (id: string): Promise<void> => {
  const categoryId = store.getState().currentCategory;
  const currentToken = await getLogin();

  try {
    await fetch(`${SERVER_PATH}words/${id}`, {
      method: 'DELETE',
      headers: {
        'token': `${currentToken}`
      }
    });

    getWords(categoryId);

  } catch(error) {
    alert('Error deleting the word. Please, try again');
  }
};

export const updateWord = async (updatedWord: ServerWord, id: string):Promise<void> => {
  const categoryId = store.getState().currentCategory;
  const currentToken = await getLogin();

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
      headers: {
        'token': `${currentToken}`
      },
      body: formData,
    });

    getWords(categoryId);

  } catch(error) {
    alert('Error updating the word. Please, try again');
  }
}