const { Pool } = require('pg');

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

const defaultImgUrl = `https://res.cloudinary.com/dum5vvgxg/image/upload/v1626173490/npwmu1voatuqxbccbkwt.jpg`;

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
    VALUES ('dog', 'Dog', 'Собака', '${defaultImgUrl}', '${defaultImgUrl}', 'animals'),
      ('panda', 'Panda', 'Панда', '${defaultImgUrl}', '${defaultImgUrl}', 'animals'),
      ('cat', 'Cat', 'Кот', '${defaultImgUrl}', '${defaultImgUrl}', 'animals'),
      ('elephant', 'Elephant', 'Слон', '${defaultImgUrl}', '${defaultImgUrl}', 'animals'),
      ('puma', 'Puma', 'Пума', '${defaultImgUrl}', '${defaultImgUrl}', 'animals'),
      ('lion', 'Lion', 'Лев', '${defaultImgUrl}', '${defaultImgUrl}', 'animals'),
      ('zebra', 'Zebra', 'Зебра', '${defaultImgUrl}', '${defaultImgUrl}', 'animals'),
      ('turtle', 'Turtle', 'Черепаха', '${defaultImgUrl}', '${defaultImgUrl}', 'animals');
  `);
  client.release();
}

setupDB().then(() => {
  console.log('DB set up')
}, (e) => {
  console.log('error setting up DB');
  console.log(e);
});