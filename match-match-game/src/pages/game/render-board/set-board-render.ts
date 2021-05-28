import { convertDifficultyToNum } from "../common-functions";

export const applyDifficulty = (difficulty: string): number | undefined => {
  document.getElementById('gameBoard')?.classList.add(difficulty);
  return convertDifficultyToNum(difficulty);
}

export const randomNumsShuffle = (cardsNum: number): number[] => {
  const half = ([...Array(cardsNum / 2 + 1).keys()].slice(1));
  return ([...half, ...half]).sort(() => Math.random() - 0.5);
};