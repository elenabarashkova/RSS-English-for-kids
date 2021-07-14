import { initAdminPage } from "../index";
import { renderAllWordsCards } from "./render";
import { ServerWordList } from "../types";
import { getWords } from "../../../server/words";
import { createWordBehavior } from "./crud/create-word";
import { editWordBehavior } from "./crud/edit-word";
import { playAudioTag } from "../../../shared";

const playWordAudio = () => {
  const audiosOnCards = document.getElementsByClassName('word-sound');

  [...audiosOnCards].forEach((item: Element) => {
    item.addEventListener('click', (event: Event) => {
      const parent = (event.currentTarget as HTMLElement).closest('.admin-card-inner-regular');
      const audioTag = parent?.querySelector('audio');

      if(audioTag) {
        playAudioTag(audioTag as HTMLAudioElement);
      }
    });
  });
}

export const startAdminWords = (allWords: ServerWordList, ): void => {
  renderAllWordsCards(allWords);
  createWordBehavior();
  editWordBehavior();
  playWordAudio();
}

export const startAdminWordsPage = (category: string): void => {
  initAdminPage();

  const AdminPanelPage = document.getElementById('AdminPanelPage');
  AdminPanelPage?.classList.add('admin-word-page');

  getWords(category);
}