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
      word varchar(50),
      name varchar(50),
      translation varchar(50),
      imageUrl varchar(255),
      sound varchar(255),
      category_id varchar(50),
      PRIMARY KEY(word),
      CONSTRAINT fk_category
        FOREIGN KEY(category_id)
        REFERENCES categories(id)
  );
  
  INSERT INTO words(word, name, category_id)
    VALUES ('kitten', 'Kitten', 'animals');
  `);
  client.release();
}

setupDB().then(() => {
  console.log('DB set up')
}, (e) => {
  console.log('error setting up DB');
  console.log(e);
});