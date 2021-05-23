import {setSettings} from "../settings/get-settings";
import {DIFFICULTIES_LIST} from "../../common/constants";

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
  return DIFFICULTIES_LIST.find(item => item.difficultyName === difficulty)?.cardsNum;
}

const randomNumsShuffle = (cardsNum: number) => {
  const half = ([...Array(cardsNum / 2 + 1).keys()].slice(1));
  return ([...half, ...half]).sort(() => Math.random() - 0.5);
};

export const renderGameBoard = ():void => {
  const board = document.getElementById('gameBoard');
  const timer = document.createElement('div');
  timer.id = 'gameTimer';
  timer.classList.add('hidden');
  const preGameTimer = document.createElement('div');
  preGameTimer.id = 'preGameTimer';
  preGameTimer.innerText = 'Remember all cards before the time runs out.';
  const preGameTimerClock = document.createElement('div');
  preGameTimerClock.id = 'preGameTimerClock';

  const { difficulty, cardsPack } = setSettings();

  board?.append(preGameTimer);
  preGameTimer?.append(preGameTimerClock);
  board?.append(timer);
  timer.innerText = 'Timer';

  const boardInner = document.createElement('div');
  boardInner.classList.add('board-inner');
  board?.append(boardInner);

  const cardsNum = applyDifficulty(difficulty) || 16;
  const randomNums = randomNumsShuffle(cardsNum);
  for(let i = 0; i < cardsNum; i++) {
    boardInner?.append(renderCard(cardsNum, cardsPack, randomNums[i]));
  }
}

