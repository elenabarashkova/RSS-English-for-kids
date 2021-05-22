export const startGame = ():void => {
  const cards = document.getElementsByClassName('card');
  let isFlipped = false;
  let isBoardBlocked = false;
  let pairFirst: HTMLElement | null;
  let pairSecond: HTMLElement | null;

  const resetBoard = () => {
    [isFlipped, isBoardBlocked] = [false, false];
    [pairFirst, pairSecond] = [null, null];
  }

  const togglePairClass = (className: string, toggle: string) => {
    pairFirst?.classList.toggle(className, toggle === 'add');
    pairSecond?.classList.toggle(className, toggle === 'add');
  }

  const unflipCards = () => {
    togglePairClass('missmatch', 'remove');
    togglePairClass('flip', 'remove');
    resetBoard();
  }

  const setMissmatched = () => {
    isBoardBlocked = true;
    togglePairClass('missmatch', 'add');
    setTimeout(unflipCards, 1500);
  }

  const flipCard = (event: Event) => {
    const targetCard = event.currentTarget as HTMLElement;
    if (targetCard === pairFirst || isBoardBlocked) {
      return;
    }
    targetCard?.classList.add('flip');

    const setMatched = () => {
      pairFirst?.removeEventListener('click', flipCard);
      pairSecond?.removeEventListener('click', flipCard);
      togglePairClass('matched', 'add');
      resetBoard();
    }

    const checkForMatch = () => {
      if(pairFirst?.dataset.pair_num === pairSecond?.dataset.pair_num) {
        setMatched();
      } else {
        setMissmatched();
      }
    }

    if(!isFlipped) {
      isFlipped = true;
      pairFirst = targetCard;
      return;
    }

    pairSecond = targetCard;
    checkForMatch();
  }

  [...cards].forEach(item => item.addEventListener('click', flipCard));
}