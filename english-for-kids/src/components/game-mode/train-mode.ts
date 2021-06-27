const cardTrainHandler = (event: Event): void => {
  const card = event.currentTarget as HTMLElement;

  if((event.target as HTMLElement).classList.contains('turnCardBtn')) {
    card.classList.add('turn');

    card.addEventListener('mouseout', () => {
      card.classList.remove('turn');
    })
  } else {
    console.log('sound');
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