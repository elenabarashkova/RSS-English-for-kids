export const applyAnimation = ():void => {
  const cards = document.getElementsByClassName('card');

  let isFlipped = false;
  let isBoardBlocked = false;
  let pairFirst: HTMLElement;
  let pairSecond: HTMLElement;

  const unflipCard = () => {
    isBoardBlocked = true;
    pairFirst?.classList.add('mismatch');
    pairSecond?.classList.add('mismatch');
    
    setTimeout(() => {
      isBoardBlocked = false;
      pairFirst?.classList.remove('mismatch');
      pairSecond?.classList.remove('mismatch');
      pairFirst?.classList.remove('flip');
      pairSecond?.classList.remove('flip');
      }, 1500);
  }

  const flipCard = (event: Event) => {
    if(isBoardBlocked) {
      return;
    }
    const targetCard = event.currentTarget as HTMLElement;
    if (this === pairFirst) {
      return;
    }
    targetCard?.classList.add('flip');

    const setMatched = () => {
      pairFirst.removeEventListener('click', flipCard);
      pairFirst.classList.add('matched');
      pairSecond.removeEventListener('click', flipCard);
      pairSecond.classList.add('matched');
    }

    const checkForMatch = () => {
      const firstData = pairFirst?.dataset.pair_num;
      const secondData = pairSecond?.dataset.pair_num;
      if(firstData === secondData) {
        setMatched();
      } else {
        unflipCard();
      }
    }

    if(!isFlipped) {
      isFlipped = true;
      pairFirst = targetCard;
      return;
    }

    pairSecond = targetCard;
    isFlipped = false;
    checkForMatch();
  }

  [...cards].forEach(item => item.addEventListener('click', flipCard));
}


