import { ServerWord, ServerWordList } from "../types";
import { getWordCard } from "./get-cards/word";
import { getNewWordCard } from "./get-cards/new-word";
import { getCreateWordCard } from "./get-cards/create-word";

export const renderWordsCards = (serverWordsList: ServerWordList): string => (`
  <div id="adminCardWrap" class="admin-categiries-wrap">
    <div id="adminCardWrap" class="admin-categiries-wrap">
    ${serverWordsList.map((word: ServerWord) => getWordCard(word)).join('')}
    ${getCreateWordCard()}
  </div>
  </div>
`);

export const renderNewWordCard = (): void => {
  const createWordCard = document.getElementById('createWordCard');
  createWordCard?.insertAdjacentHTML('beforebegin', getNewWordCard());
}

export const removeNewWordCard = (): void => {
  const newWordForm = document.getElementById('newWordForm');
  newWordForm?.remove();
}

export const renderAllWordsCards = (words: ServerWordList): void => {
  const adminPanelPageInner = document.getElementById('adminPanelPageInner');

  if(adminPanelPageInner) {
    adminPanelPageInner.innerHTML = '';
  }
  adminPanelPageInner?.insertAdjacentHTML('beforeend', renderWordsCards(words));
}