import { pool } from "../init-db";
import { Word } from "./interface";

export const getWords = async (): Promise<Word[]> => {
    const client = await pool.connect();
    const result = await client.query(`SELECT * FROM words`);

    client.release();

    return result.rows;
}

export const getWordById = async (wordId: string): Promise<Word | undefined> => {
  const client = await pool.connect();
  const result = await client.query(`
    SELECT * FROM words
      WHERE id = '${wordId}';
  `);

  client.release();

  return result.rows[0];
}

export const deleteWord = async (wordId: string): Promise<void> => {
  const client = await pool.connect();
  const result = await client.query(`
    DELETE FROM words
      WHERE id = '${wordId}';
  `);

  client.release();

  return;
}

export const createWord = async ({id, name, translation, imageurl, soundurl, category_id}: Word): Promise<void> => {
  const client = await pool.connect();
  const result = await client.query(`
    INSERT INTO words(id, name, translation, imageUrl, soundUrl, category_id)
      VALUES ('${id}', '${name}', ${translation}', '${imageurl}', ${soundurl}', '${category_id}');
  `);

  client.release();

  return;
}

export const updateWord = async ({id, name, translation, imageurl, soundurl}: Word): Promise<void> => {
  const client = await pool.connect();
  const result = await client.query(`
    UPDATE words
      SET name = '${name}', 
        translation = '${translation}', 
        imageUrl = '${imageurl}', 
        soundUrl = '${soundurl}', 
      WHERE id = '${id}';
  `);

  client.release();

  return;
}