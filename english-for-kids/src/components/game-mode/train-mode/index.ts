import { playAudioTag } from "../../../shared";

const cardTrainHandler = (event: Event): void => {
  const card = event.currentTarget as HTMLElement;

  if((event.target as HTMLElement).classList.contains('turn-card-btn')) {
    card.classList.add('turn');

    const mouseOutHandler = () => {
      card.classList.remove('turn');
    }
    card.addEventListener('mouseleave', mouseOutHandler, {once: true});
  } else {
    const audio = card.querySelector('audio');

    if(audio && !card.classList.contains('turn')) {
      playAudioTag(audio);
    }
  }
}

export const startBehaviorTrain = (): void => {
  // подписаться на родителя карточек вметро всего что ниже

  const cards = document.getElementsByClassName('word-card');
  [...cards].forEach(card => card.addEventListener('click', cardTrainHandler));
}

export const stopBehaviorTrain = (): void => {
  // отписаться от родителя карточек вместо всего что ниже

  const cards = document.getElementsByClassName('word-card');
  [...cards].forEach(card => card.removeEventListener('click', cardTrainHandler));
}