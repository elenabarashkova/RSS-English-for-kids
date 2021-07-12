import { Category } from "./interface";
import { pool } from "../init-db";

// FILE for methods to CRUD categories

// config could be replacedby import of json file
let categories: Array<Category> = [
  {
    name: 'Animals',
    id: 'animals',
    // imageUrl: getCategoryImagePath('animals'),
    // wordsConfig: wordsListConfigAnimals,
  },
  {
    name: 'Transport',
    id: 'transport',
    // imageUrl: getCategoryImagePath('transport'),
    // wordsConfig: wordsListConfigTransport,
  },
  {
    name: 'Ecology',
    id: 'ecology',
    // imageUrl: getCategoryImagePath('ecology'),
    // wordsConfig: wordsListConfigEcology,
  },
  {
    name: 'Camping',
    id: 'camping',
    // imageUrl: getCategoryImagePath('camping'),
    // wordsConfig: wordsListConfigCamping,
  },
  {
    name: 'Fruits',
    id: 'fruits',
    // imageUrl: getCategoryImagePath('fruits'),
    // wordsConfig: wordsListConfigFruits,
  },
  {
    name: 'Food',
    id: 'food',
    // imageUrl: getCategoryImagePath('food'),
    // wordsConfig: wordsListConfigFood,
  },
  {
    name: 'House',
    id: 'house',
    // imageUrl: getCategoryImagePath('house'),
    // wordsConfig: wordsListConfigHouse,
  },
  {
    name: 'Farm',
    id: 'farm',
    // imageUrl: getCategoryImagePath('farm'),
    // wordsConfig: wordsListConfigFarm,
  },
];

export const getCategories = async (): Promise<Category[]> => {
    const client = await pool.connect();
    const result = await client.query(`SELECT * FROM categories`);

    client.release();

    return result.rows;

  // return Promise.resolve<Category[]>(categories);
}





export const getCategoryById = (categoryId: string): Promise<Category | undefined> => (
  Promise.resolve(categories.find((cat) => cat.id === categoryId))
);

export const deleteCategory = (id: string): Promise<void> => {
  const index = categories.findIndex((cat) => cat.id === id);

  if (index === -1) {
    Promise.reject(new Error('Category not found'));
  }

  categories.splice(index, 1);
  return Promise.resolve();
}

export const createCategory = (newCategory: Category): Promise<Category> => {
  const isExisting = typeof categories
    .find((cat) => cat.name.toLowerCase() === newCategory.name.toLowerCase()) !== 'undefined';

  if (isExisting) {
    return Promise.reject(new Error(`Category with name ${newCategory.name} is already exists`));
  }

  const model = { ...newCategory};
  categories.push(model);

  return Promise.resolve(model);
}

export const updateCategory = async (updatedCategory: Category): Promise<Category> => {
  const categoryId = updatedCategory.id;

  categories = categories.map(category => {
    if(category.id === categoryId) {
      return updatedCategory;
    }

    return category;
  })

  return Promise.resolve(updatedCategory);
}