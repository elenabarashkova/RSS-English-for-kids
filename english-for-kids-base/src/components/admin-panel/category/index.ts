import { ServerCategoryList } from "../types";
import { renderAllCatCards } from "./render";
import { createCategoryBehavior } from "./crud/create-category";
import { editCategoryBehavior } from "./crud/edit-category";
import { getCategories } from "../../../server/categories";
import { initAdminPage } from "../index";

export const startAdminCategories = (allCats: ServerCategoryList, ): void => {
  renderAllCatCards(allCats);
  createCategoryBehavior();
  editCategoryBehavior();
}

export const startAdminCategoriesPage = (): void => {
  initAdminPage();

  const AdminPanelPage = document.getElementById('AdminPanelPage');
  AdminPanelPage?.classList.remove('admin-word-page');

  getCategories();
}