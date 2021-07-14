import { cat, dog, elephant, lion, panda, puma, turtle, zebra } from "./word/wordsConfigs/animals";
import { backpack, campfire, flashlight, kayak, map, sleepingbag, tent, woods } from "./word/wordsConfigs/camping";
import {
  climate,
  desert,
  extinction,
  habitat,
  pollution,
  rainforest,
  savanna,
  tundra
} from "./word/wordsConfigs/ecology";

const { Pool } = require('pg');

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

const setupDB = async () => {
  const client = await pool.connect();

  const result = await client.query(`
  set transaction read write; 
  
  DROP TABLE IF EXISTS words;
  DROP TABLE IF EXISTS categories;
  
  CREATE TABLE categories(
    id varchar(50),
    name varchar(50),
    PRIMARY KEY(id)
  );

  INSERT INTO categories(id, name)
    VALUES ('animals', 'Animals'),
      ('transport', 'Transport'),
      ('ecology', 'Ecology'),
      ('camping', 'Camping'),
      ('food', 'Food'),
      ('house', 'House'),
      ('farm', 'Farm'),
      ('fruits', 'Fruits');
  
  CREATE TABLE words(
      id varchar(50),
      name varchar(50),
      translation varchar(50),
      imageUrl varchar(255),
      soundUrl varchar(255),
      category_id varchar(50),
      PRIMARY KEY(id),
      CONSTRAINT fk_category
        FOREIGN KEY(category_id)
        REFERENCES categories(id)
  );
  
  INSERT INTO words(id, name, translation, imageurl, soundurl, category_id)
    VALUES ${dog}, ${panda}, ${elephant}, ${cat}, ${puma}, ${lion}, ${zebra}, ${turtle},
    ${tent}, ${backpack}, ${kayak}, ${map}, ${sleepingbag}, ${woods}, ${campfire}, ${flashlight},
    ${rainforest}, ${habitat}, ${pollution}, ${climate}, ${desert}, ${extinction}, ${savanna}, ${tundra};
  `);
  client.release();
}

setupDB().then(() => {
  console.log('DB set up')
}, (e) => {
  console.log('error setting up DB');
  console.log(e);
});