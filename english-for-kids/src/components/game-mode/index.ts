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
  console.log('behaviorChanged');
  if(gameMode === GAME_MODES.GAME) {
    console.log('game');
    stopBehaviorTrain();
    startBehaviorGame();
  }
  else if(gameMode === GAME_MODES.TRAIN) {
    console.log('train');
    stopBehaviorGame();
    startBehaviorTrain();
  }
}