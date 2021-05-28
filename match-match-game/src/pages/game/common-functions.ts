import { DEFAULT_CARDS_NUM, DIFFICULTIES_LIST } from "./constants";

export const convertDifficultyToNum = (difficulty: string): number =>
  DIFFICULTIES_LIST.find(item => item.difficultyName === difficulty)?.cardsNum || DEFAULT_CARDS_NUM;