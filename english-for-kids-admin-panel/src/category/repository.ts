import { Category } from "./interface";
import { pool } from "../init-db";

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
}

export const getCategoryById = async (categoryId: string): Promise<Category | undefined> => {
  const client = await pool.connect();
  const result = await client.query(`
    SELECT * FROM categories
      WHERE id = '${categoryId}';
  `);

  client.release();

  return result.rows[0];
}

export const deleteCategory = async (categoryId: string): Promise<void> => {
  const client = await pool.connect();
  const result = await client.query(`
    DELETE FROM categories
      WHERE id = '${categoryId}';
  `);

  client.release();

  return;
}

export const createCategory = async ({id, name}: Category): Promise<void> => {
  const client = await pool.connect();
  const result = await client.query(`
    INSERT INTO categories(id, name)
      VALUES ('${id}', '${name}');
  `);

  client.release();

  return;
}

export const updateCategory = async ({id, name}: Category): Promise<void> => {
  const client = await pool.connect();
  const result = await client.query(`
    UPDATE categories
      SET id = '${id}',
      name = '${name}',
      WHERE id = '${id}';
  `);

  client.release();

  return;

  // const categoryId = updatedCategory.id;
  //
  // categories = categories.map(category => {
  //   if(category.id === categoryId) {
  //     return updatedCategory;
  //   }
  //
  //   return category;
  // })
  //
  // return Promise.resolve(updatedCategory);
}