import { Router } from 'express';
import { createWord, deleteWord, getWords, getWordById, updateWord } from "./repository";
import { Word } from "./interface";
import { Multer } from "multer";
import * as path from 'path';

const router = Router();

router.get('/:category', async (req, res) => {
  const categoryId = String(req.params.category);

  try {
    const words = await getWords(categoryId);
    return res.json(words);
  }
  catch (error) {
    return res.status(500).send(error);
  }
});

router.get('/:id', async (req, res) => {
  const wordId = String(req.params.id);

  if (!wordId) {
    return res.sendStatus(400);
  }

  const word = await getWordById(wordId);

  if (!word) {
    return res.sendStatus(404);
  }

  return res.json(word);
});

router.delete('/:id', async (req, res) => {
  const wordId = String(req.params.id);

  if (!wordId) {
    return res.sendStatus(400);
  }

  try {
    await deleteWord(wordId);
    return res.sendStatus(200);
  }
  catch (error) {
    return res.status(404).send(error);
  }
});

require('dotenv').config();
const cloudinary = require('cloudinary').v2;
const multer  = require('multer');
const loader: Multer = multer({dest: path.join(__dirname, 'tmp')});

router.post('/', loader.fields([{ name: 'imageurl', maxCount: 1 }, { name: 'soundurl', maxCount: 1 }]), async (req, res) => {
  try {
    const pictureFiles = req.files as { [imageurl: string]: Express.Multer.File[] };
    const audioFiles = req.files as { [soundurl: string]: Express.Multer.File[] };

    let pictureUrl = null;
    if(pictureFiles.imageurl) {
      const pictureResponse = await cloudinary.uploader.upload(pictureFiles.imageurl[0].path);
      pictureUrl = pictureResponse.secure_url;
    }

    const audioResponse = await cloudinary.uploader.upload(audioFiles.soundurl[0].path, {resource_type: 'auto'});
    const audioUrl = audioResponse.secure_url;

    const data = req.body as Word;
    data.imageurl = pictureUrl;
    data.soundurl = audioUrl;

    if (!data.name) return res.sendStatus(400);

    const newWord = await createWord(data);
    return res.json(newWord);
  }
  catch (error) {
    return res.status(400).send(error);
  }
});

router.put('/:id', loader.fields([{ name: 'imageurl', maxCount: 1 }, { name: 'soundurl', maxCount: 1 }]), async (req, res) => {
  try {
    const pictureFiles = req.files as { [imageurl: string]: Express.Multer.File[] };
    const audioFiles = req.files as { [soundurl: string]: Express.Multer.File[] };

    let pictureUrl = null;
    if(pictureFiles.imageurl) {
      const pictureResponse = await cloudinary.uploader.upload(pictureFiles.imageurl[0].path);
      pictureUrl = pictureResponse.secure_url;
    }

    let audioUrl = null;
    if (audioFiles.soundurl) {
      const audioResponse = await cloudinary.uploader.upload(audioFiles.soundurl[0].path, {resource_type: 'auto'});
      audioUrl = audioResponse.secure_url;
    }

    const data = req.body as Word;
    data.imageurl = pictureUrl;
    data.soundurl = audioUrl;
    data.id = String(req.params.id);

    if (!data.name) return res.sendStatus(400);

    const updatedWord = await updateWord(data);
    return res.json(updatedWord);
  }
  catch (error) {
    console.error(error);
    return res.status(400).send(error);
  }
});

export default router;