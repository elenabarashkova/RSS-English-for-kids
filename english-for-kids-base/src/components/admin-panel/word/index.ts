import { initAdminPage } from "../index";
import { renderAllWordsCards, renderWordsCards } from "./render";
import { ServerCategoryList } from "../types";

export const startAdminWords = (allWords: ServerCategoryList, ): void => {
  renderAllWordsCards(allWords);
  // createCategoryBehavior();
  // editCategoryBehavior();
}

export const startAdminWordsPage = (category: string): void => {
  initAdminPage();

  const AdminPanelPage = document.getElementById('AdminPanelPage');
  AdminPanelPage?.classList.add('admin-word-page');
}