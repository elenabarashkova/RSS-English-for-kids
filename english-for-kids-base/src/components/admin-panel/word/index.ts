import { initAdminPage } from "../index";
import { renderAllWordsCards } from "./render";
import { ServerWordList } from "../types";
import { getWords } from "../../../server/words";

export const startAdminWords = (allWords: ServerWordList, ): void => {
  renderAllWordsCards(allWords);
  // createCategoryBehavior();
  // editCategoryBehavior();
}

export const startAdminWordsPage = (category: string): void => {
  initAdminPage();

  const AdminPanelPage = document.getElementById('AdminPanelPage');
  AdminPanelPage?.classList.add('admin-word-page');

  getWords(category);
}