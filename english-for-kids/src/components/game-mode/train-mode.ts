import { playAudioTag } from "../../shared";

const cardTrainHandler = (event: Event): void => {
  const card = event.currentTarget as HTMLElement;

  if((event.target as HTMLElement).classList.contains('turnCardBtn')) {
    card.classList.add('turn');

    const mouseOutHandler = () => {
      card.classList.remove('turn');
      card.removeEventListener('mouseleave', mouseOutHandler);
    }
    card.addEventListener('mouseleave', mouseOutHandler);
  } else {
    const audio = card.querySelector('audio');

    if(audio && !card.classList.contains('turn')) {
      playAudioTag(audio);
    }
  }
}

export const startBehaviorTrain = (): void => {
  const cards = document.getElementsByClassName('category-card');
  [...cards].forEach(card => card.addEventListener('click', cardTrainHandler));
}

export const stopBehaviorTrain = (): void => {
  const cards = document.getElementsByClassName('category-card');
  [...cards].forEach(card => card.removeEventListener('click', cardTrainHandler));
}