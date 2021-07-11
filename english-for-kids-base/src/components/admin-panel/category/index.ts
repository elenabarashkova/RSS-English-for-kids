import { ServerCategoryList } from "../types";
import { createCategoryBehavior, editCategoryBehavior, renderAllCatCards } from "./crud";

export const startAdminCategories = (allCats: ServerCategoryList, ): void => {
  renderAllCatCards(allCats);
  createCategoryBehavior();
  editCategoryBehavior();
}