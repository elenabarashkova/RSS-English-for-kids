import store from "../../../../redux/store";
import { setCreateWordFormAction } from "../../../../redux/actions";
import { addNewWord } from "./index";

export const createWordBehavior = (): void => {
  const createCategoryBtn = document.getElementById('createWordCard');

  createCategoryBtn?.addEventListener('click', () => {
    setCreateWordFormAction(true);

    const newWordCards = document.getElementsByClassName('new-word-card');

    [...newWordCards].forEach((card) => card.addEventListener('click', (event: Event) => {

      const inputName = card.querySelector('input.edit-word-name') as HTMLInputElement;
      const inputTranslation = card.querySelector('input.edit-word-translation') as HTMLInputElement;
      const inputImage = card.querySelector('input.edit-word-image') as HTMLInputElement;
      const inputAudio = card.querySelector('input.edit-word-audio') as HTMLInputElement;
      const createBtn = card.querySelector('.new-cat-create');
      const cancelBtn = card.querySelector('.new-cat-cancel');

      const target = event.target as HTMLElement;

      if(target === createBtn) {

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
        const thisCategory = store.getState().currentCategory;

        addNewWord(inputNameValue, inputTranslationValue, inputImageValue, inputAudioValue, thisCategory);
        setCreateWordFormAction(false);
      }

      if(target === cancelBtn) {
        setCreateWordFormAction(false);
      }
    }))
  })
}