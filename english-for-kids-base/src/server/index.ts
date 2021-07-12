import { setCategoriesListAction } from "../redux/actions";
import { SERVER_PATH } from "./constants";
import { ServerCategory } from "../components/admin-panel/types";

export const getCategories = async (): Promise<void> => {
  const response = await fetch(`${SERVER_PATH}categories`);
  const result = await response.json();

  setCategoriesListAction(result);
}

export const getCategory = async (id: string): Promise<ServerCategory> => {
  const response = await fetch(`${SERVER_PATH}categories/${id}`);
  return response.json();
}

export const postNewCategory = async (newCategory: ServerCategory): Promise<void> => {
  try {
    await fetch(`${SERVER_PATH}categories`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newCategory),
    });

    getCategories();

  } catch(error) {
    alert('Error creating the Category. Please, try again');
  }
};

export const deleteCategory = async (id: string): Promise<void> => {
  try {
    await fetch(`${SERVER_PATH}categories/${id}`, {
      method: 'DELETE',
    });

    getCategories();

  } catch(error) {
    alert('Error deleting the category. Please, try again');
  }
};

export const updateCategory = async (updatedCategory: ServerCategory):Promise<void> => {
  const categoryId = updatedCategory.id;

  try {
    await fetch(`${SERVER_PATH}categories/${categoryId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedCategory),
    });

    getCategories();

  } catch(error) {
    alert('Error updating the category. Please, try again');
  }
}