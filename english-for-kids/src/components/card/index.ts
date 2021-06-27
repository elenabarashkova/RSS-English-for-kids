const cardTrainHandler = (event: Event) => {
  const card = event.currentTarget as HTMLElement;

  const turnCardBtn = document.querySelector('.turnCardBtn');

  if((event.target as HTMLElement).classList.contains('turnCardBtn')) {
    card.classList.add('turn');
    card.addEventListener('mouseout', () => {
      card.classList.remove('turn');
    })
  } else {
    console.log('sound');
  }
}

export const cardBehaviorTrain = () => {
  const cards = document.getElementsByClassName('category-card');
  [...cards].forEach(card => card.addEventListener('click', cardTrainHandler));
}

export const stopCardBehaviorTrain = () => {
  const cards = document.getElementsByClassName('category-card');
  [...cards].forEach(card => card.removeEventListener('click', cardTrainHandler));
}



