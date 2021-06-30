import { GAME_MODES } from "../../shared/constants";
import { startBehaviorTrain, stopBehaviorTrain } from "./train-mode";
import { startBehaviorGame, stopBehaviorGame } from "./game-mode";

export const gameStartTrack = (isGameStarted: boolean): void => {
  const mainWrap = document.getElementById('mainWrap');

  if(isGameStarted) {
    mainWrap?.classList.add('game-started');
  } else {
    mainWrap?.classList.remove('game-started');
  }
}

export const gameModeBehaviorToggle = (gameMode: string): void => {
  stopBehaviorGame();
  stopBehaviorTrain();
  if(gameMode === GAME_MODES.GAME) {
    // stopBehaviorTrain();
    startBehaviorGame();
  }
  else if(gameMode === GAME_MODES.TRAIN) {
    // stopBehaviorGame();
    startBehaviorTrain();
  }
}