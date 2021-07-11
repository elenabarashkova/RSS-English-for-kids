import { ServerCategoryList } from "../types";
import { renderAllCatCards } from "./render";
import { createCategoryBehavior } from "./crud/create-category";
import { editCategoryBehavior } from "./crud/edit-category";

export const startAdminCategories = (allCats: ServerCategoryList, ): void => {
  renderAllCatCards(allCats);
  createCategoryBehavior();
  editCategoryBehavior();
}