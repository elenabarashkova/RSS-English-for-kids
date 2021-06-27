import { GAME_MODES } from "../../shared/constants";
import { startBehaviorGame, stopBehaviorGame } from "./game-mode";
import { startBehaviorTrain, stopBehaviorTrain } from "./train-mode";

export const gameModeBehaviorToggle = (gameMode: string): void => {
  if(gameMode === GAME_MODES.GAME) {
    stopBehaviorTrain();
    startBehaviorGame();
  }
  else if(gameMode === GAME_MODES.TRAIN) {
    stopBehaviorGame();
    startBehaviorTrain();
  }
}
