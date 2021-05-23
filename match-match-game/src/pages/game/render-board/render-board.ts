import { setSettings } from "../../settings/get-settings";
import { renderCard } from "./render-card";
import { applyDifficulty, randomNumsShuffle } from "./set-board-render";
import {renderMainTimer, renderPreGameTimer} from "./render-timers";

export const renderGameBoard = ():void => {
  const board = document.getElementById('gameBoard');
  const { difficulty, cardsPack } = setSettings();

  board?.append(renderPreGameTimer());
  board?.append(renderMainTimer());

  const boardInner = document.createElement('div');
  boardInner.classList.add('board-inner');
  board?.append(boardInner);

  const cardsNum = applyDifficulty(difficulty) || 16;
  const randomNums = randomNumsShuffle(cardsNum);
  for(let i = 0; i < cardsNum; i++) {
    boardInner?.append(renderCard(cardsNum, cardsPack, randomNums[i]));
  }
}