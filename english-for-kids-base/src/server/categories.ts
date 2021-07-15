import { setCategoriesListAction } from "../redux/actions";
import { SERVER_PATH } from "./constants";
import { ServerCategory } from "../components/admin-panel/types";
import { getLogin } from "../components/indexedDB";
import { redirectToDefaultPage } from "../shared";

export const getCategories = async (): Promise<void> => {
  const currentToken = await getLogin();

  const response = await fetch(`${SERVER_PATH}categories`, {
    headers: {
      'token': `${currentToken}`
    }
  });
  const result = await response.json();

  setCategoriesListAction(result);
}

export const getCategory = async (id: string): Promise<ServerCategory> => {
  const currentToken = await getLogin();

  const response = await fetch(`${SERVER_PATH}categories/${id}`, {
    headers: {
      'token': `${currentToken}`
    }
  });
  return response.json();
}

export const postNewCategory = async (newCategory: ServerCategory): Promise<void> => {
  const currentToken = await getLogin();

  try {
    const response = await fetch(`${SERVER_PATH}categories`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'token': `${currentToken}`
      },
      body: JSON.stringify(newCategory),
    });

    if (!response.ok) {
      redirectToDefaultPage();
    }

    getCategories();

  } catch(error) {
    alert('Error creating the Category. Please, try again');
  }
};

export const deleteCategory = async (id: string): Promise<void> => {
  const currentToken = await getLogin();

  try {
    const response = await fetch(`${SERVER_PATH}categories/${id}`, {
      method: 'DELETE',
      headers: {
        'token': `${currentToken}`
      }
    });

    if (!response.ok) {
      redirectToDefaultPage();
    }

    getCategories();

  } catch(error) {
    alert('Error deleting the category. Please, try again');
  }
};

export const updateCategory = async (updatedCategory: ServerCategory):Promise<void> => {
  const categoryId = updatedCategory.id;
  const currentToken = await getLogin();

  try {
    const response = await fetch(`${SERVER_PATH}categories/${categoryId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'token': `${currentToken}`
      },
      body: JSON.stringify(updatedCategory),
    });

    if (!response.ok) {
      redirectToDefaultPage();
    }

    getCategories();

  } catch(error) {
    alert('Error updating the category. Please, try again');
  }
}