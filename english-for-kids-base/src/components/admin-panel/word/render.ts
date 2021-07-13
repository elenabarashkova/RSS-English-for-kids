import { ServerWord, ServerWordList } from "../types";
import { getWordCard } from "./get-cards/word";

export const renderWordsCards = (serverWordsList: ServerWordList): string => (`
  <div id="adminCardWrap" class="admin-categiries-wrap">
    <div id="adminCardWrap" class="admin-categiries-wrap">
    ${serverWordsList.map((word: ServerWord) => getWordCard(word)).join('')}
  </div>
  </div>
`);

export const renderAllWordsCards = (words: ServerWordList): void => {
  const adminPanelPageInner = document.getElementById('adminPanelPageInner');

  if(adminPanelPageInner) {
    adminPanelPageInner.innerHTML = '';
  }
  adminPanelPageInner?.insertAdjacentHTML('beforeend', renderWordsCards(words));
}