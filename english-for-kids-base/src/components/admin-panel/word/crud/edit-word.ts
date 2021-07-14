import { deleteWord, getWord, updateWord } from "../../../../server/words";
import { ServerWord } from "../../types";

export const editModeCardHandler = async (event: Event, card: Element): Promise<void> => {
  const inputName = card.querySelector('input.edit-word-name') as HTMLInputElement;
  const inputTranslation = card.querySelector('input.edit-word-translation') as HTMLInputElement;
  const inputImage = card.querySelector('input.edit-word-image') as HTMLInputElement;
  const inputAudio = card.querySelector('input.edit-word-audio') as HTMLInputElement;
  const createBtn = card.querySelector('.new-cat-create');
  const cancelBtn = card.querySelector('.new-cat-cancel');
  const cardId = card.id;

  const target = event.target as HTMLElement;

  if(target === createBtn) {

    const thisWord: ServerWord = await getWord(cardId);

    const inputNameValue = inputName.value;
    const inputTranslationValue = inputTranslation.value;
    let inputImageValue = null;
    if (inputImage.files) {
      [inputImageValue] = inputImage.files;
    }
    let inputAudioValue = null;
    if (inputAudio.files) {
      [inputAudioValue] = inputAudio.files;
    }

    const updatedWord: ServerWord = {
      ...thisWord,
      name: inputNameValue,
      translation: inputTranslationValue,
      imageurl: inputImageValue,
      soundurl: inputAudioValue};

    updateWord(updatedWord, cardId);

    card.classList.remove('updating');
  }

  if(target === cancelBtn) {
    card.classList.remove('updating');
  }
}

export const editWordBehavior = (): void => {
  const adminWordsCards = document.getElementsByClassName('admin-word-card');

  [...adminWordsCards].forEach(card => card.addEventListener('click', (event: Event) => {
    const { target } = event;
    const cardId = card.id;

    const deleteBtn = card.querySelector('.delete-btn');
    const updateBtn = card.querySelector('.update-cat-btn');

    if(target === deleteBtn) {
      deleteWord(cardId);
    }

    if(target === updateBtn) {
      card.classList.add('updating');

      card.addEventListener('click', (innerEvent: Event) => {
        editModeCardHandler(innerEvent, card);
      });
    }
  }))
}