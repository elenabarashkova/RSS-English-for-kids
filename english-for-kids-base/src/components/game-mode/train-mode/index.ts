import { playAudioTag } from "../../../shared";
// import { updateWord } from "../../statistics/indexedDB";

const cardTrainHandler = (event: Event): void => {
  const target = event.target as HTMLElement;

  const card = target.closest('.word-card');

  // if(card) {
  //   updateWord(card.id, 'trainedNum');
  // }

  const turnCardBtn = target.classList.contains('turn-card-btn');
  const cardInner = card?.querySelector('.card-inner');

  if(turnCardBtn) {
    cardInner?.classList.add('turn');

    const mouseOutHandler = () => {
      cardInner?.classList.remove('turn');
    }
    card?.addEventListener('mouseleave', mouseOutHandler, {once: true});
  }

  else if(card && !cardInner?.classList.contains('turn')) {
    const audio = card.querySelector('audio');

    if(audio) {
      playAudioTag(audio);
    }
  }
}

export const startBehaviorTrain = (): void => {
  const cardsWrap = document.querySelector('.category-page.card-wrap')
  cardsWrap?.addEventListener('click', cardTrainHandler);
}

export const stopBehaviorTrain = (): void => {
  const cardsWrap = document.querySelector('.category-page.card-wrap')
  cardsWrap?.removeEventListener('click', cardTrainHandler);
}