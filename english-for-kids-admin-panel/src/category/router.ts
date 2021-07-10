import { Router } from 'express';
import { STATUS_CODES } from "http";
import { createCategory, deleteCategory, getCategories, getCategoryById } from "./repository";
import { Category } from "./interface";

const router = Router();

router.get('/', async (req, res) => {
  const categories = await getCategories();
  return res.json(categories);
});

router.get('/:id', async (req, res) => {
  const categoryId = String(req.params.id);

  if (!categoryId) {
    return res.sendStatus(400);
  }
  const category = await getCategoryById(categoryId);
  if (!category) {
    return res.sendStatus(404);
  }
  return res.json(category);
});

router.delete('/:id', async (req, res) => {
  const categoryId = String(req.params.id);

  if (!categoryId) {
    return res.sendStatus(400);
  }

  try {
    await deleteCategory(categoryId);
    return res.sendStatus(200);
  } catch (error) {
    return res.status(404).send(error);
  }
});

router.post('/', async (req, res) => {
  const data = req.body as Category;
  if (!data.name) return res.sendStatus(400);
  try {
    const newCategory = await createCategory(data);
    return res.json(newCategory);
  } catch (error) {
    return res.status(400).send(error);
  }
});

export default router;