import { Router } from 'express';
import { createWord, deleteWord, getWords, getWordById, updateWord } from "./repository";
import { Word } from "./interface";

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

router.post('/', async (req, res) => {
  const data = req.body as Word;

  if (!data.name) return res.sendStatus(400);
  try {
    const newWord = await createWord(data);
    return res.json(newWord);
  }
  catch (error) {
    return res.status(400).send(error);
  }
});

router.put('/:id', async (req, res) => {
  const data = req.body as Word;


  if (!data.name) return res.sendStatus(400);
  try {
    const updatedWord = await updateWord(data);
    return res.json(updatedWord);
  }
  catch (error) {
    return res.status(400).send(error);
  }
});

export default router;