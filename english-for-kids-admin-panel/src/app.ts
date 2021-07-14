import * as path from 'path';
import * as express from 'express';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';
import categories from "./category/router";
import words from "./word/router";
import { Multer } from "multer";
import { pool } from "./init-db";

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const PORT = process.env.PORT || 3000;

app.use('/api/categories', categories);
app.use('/api/words', words);

require('dotenv').config();
const cloudinary = require('cloudinary').v2;
const multer  = require('multer');
const fs = require('fs/promises');

const loader: Multer = multer({dest: path.join(__dirname, 'tmp')});

app.post('/send-img', loader.single('picture'), async function (req, res) {
  try {
    const result = await cloudinary.uploader.upload((req.file as Express.Multer.File).path, {resource_type: 'auto'});
    res.send(result);
  }
  catch (error) {
    res.send(error);
  }

  fs.unlink((req.file as Express.Multer.File).path);
});

// const cpUpload = loader.fields([{ name: 'picture', maxCount: 1 }, { name: 'audio', maxCount: 1 }]);
// app.post('/create-word', cpUpload, async (req, res) => {
//
//   // cloudinary logic
//   const pictureResponse = await cloudinary.uploader.upload((req.files.picture as Express.Multer.File).path);
//   const pictureUrl = pictureResponse.secureUrl;
//
//   const audioResponse = await cloudinary.uploader.upload((req.files.audio as Express.Multer.File).path);
//   const audioUrl = audioResponse.secureUrl;
//
//   const client = await pool.connect();
//   const result = await client.query(`
//     INSERT INTO words(word, translation, category_id, picture, audio)
//       VALUES ('${req.body.word}', '${req.body.translation}', '${req.body.category}', '${pictureUrl}', '${audioUrl}');
//   `);
//
//   client.release();
//
//   return result.rows;
//
// });


app.listen(PORT, () => console.log('Started server Hello'));