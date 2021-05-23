import {DIFFICULTIES_LIST} from "../../../common/constants";

export const applyDifficulty = (difficulty: string):number | undefined => {
  document.getElementById('gameBoard')?.classList.add(difficulty);
  return DIFFICULTIES_LIST.find(item => item.difficultyName === difficulty)?.cardsNum;
}

export const randomNumsShuffle = (cardsNum: number):number[] => {
  const half = ([...Array(cardsNum / 2 + 1).keys()].slice(1));
  return ([...half, ...half]).sort(() => Math.random() - 0.5);
};