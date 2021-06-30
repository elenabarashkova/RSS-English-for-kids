const getGameBtns = (): string => (`
  <button id="startGameBtn" class="game-btn start-game-btn">Start Game</button>
  <button id="repeatWordBtn" class="game-btn repeat-word-btn"></button>
`)

export const removeGameBtns = (): void => {
  const gameBtnsWrap = document.getElementById('gameBtnsWrap');

  if(gameBtnsWrap) {
    gameBtnsWrap.innerHTML = '';
  }
}

export const renderGameBtns = (): void => {
  removeGameBtns();

  const gameBtnsWrap = document.getElementById('gameBtnsWrap');
  gameBtnsWrap?.insertAdjacentHTML('beforeend', getGameBtns());
}

const correctStar = require('../../assets/correct-star.svg');
const incorrectStar = require('../../assets/incorrect-star.svg');

const getStar = (isCorrect: boolean): string => (`
  <span class="star-icon">${isCorrect? correctStar : incorrectStar}</span>
`)

export const renderStar = (isCorrect: boolean): void => {
  const starsWrap = document.getElementById('starsWrap');
  starsWrap?.insertAdjacentHTML('beforeend', getStar(isCorrect));
}

export const removeStars = (): void => {
  const starsWrap = document.getElementById('starsWrap');

  if(starsWrap) {
    starsWrap.innerHTML = '';
  }
}