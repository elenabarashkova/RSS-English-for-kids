import { Category } from "./interface";
import { pool } from "../init-db";

export const getCategories = async (): Promise<Category[]> => {
    const client = await pool.connect();
    const result = await client.query(`
      SELECT cat.id, cat.name, count(wrd.category_id), max(wrd.imageurl) as imageurl
        FROM categories as cat
        LEFT JOIN words AS wrd ON (cat.id = wrd.category_id)
        GROUP BY cat.id;
    `);

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
      SET name = '${name}'
      WHERE id = '${id}';
  `);

  client.release();

  return;
}