const renderCard = (cardsNum: number, picturePack:string, pairNumber: number) => {
  const card = document.createElement('div');
  card.classList.add('card');
  card.setAttribute('data-pair_num', String(pairNumber));
  card.innerHTML = (
    `<div class="card-inner">
      <img class="front-face" src=assets/${picturePack}/${pairNumber}.png alt="Card-fontface">
      <img class="back-face" src="assets/card-backside.png" alt="Card-backface">
    </div>
  `);
  return card;
};

const applyDifficulty = (difficulty: string) => {
  document.getElementById('gameBoard')?.classList.add(difficulty);
  const difficultyList = [
    {
      difficultyName: 'easy',
      cardsNum: 16,
    },
    {
      difficultyName: 'medium',
      cardsNum: 24,
    },
    {
      difficultyName: 'hard',
      cardsNum: 36,
    },
  ];
  return difficultyList.find(item => item.difficultyName === difficulty)?.cardsNum;
}

const randomNumsShuffle = (cardsNum: number) => {
  const half = ([...Array(cardsNum / 2 + 1).keys()].slice(1));
  return ([...half, ...half]).sort(() => Math.random() - 0.5);
};

export const renderGameBoard = (difficulty = 'easy', picturePack = 'fruits-pack'):boolean => {
  const board = document.getElementById('gameBoard');
  const timer = document.createElement('div');
  timer.id = 'gameTimer';
  board?.append(timer);
  timer.innerText = 'Timer';

  const boardInner = document.createElement('div');
  boardInner.classList.add('board-inner');
  board?.append(boardInner);

  const cardsNum = applyDifficulty(difficulty) || 16;
  const randomNums = randomNumsShuffle(cardsNum);
  for(let i = 0; i < cardsNum; i++) {
    boardInner?.append(renderCard(cardsNum, picturePack, randomNums[i]));
  }
  return true;
}

