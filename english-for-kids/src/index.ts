import "./style.css";
import store from "./redux/store";
import { initCommonPageTemplate } from "./components";
import { startRouter } from "./router";
import { gameModeBehaviorToggle, gameStartTrack } from "./components/game-mode";
import { startBehaviorTrain } from "./components/game-mode/train-mode";
import { GAME_MODES } from "./shared/constants";
import { mistakesCountAction, stopGameAction } from "./redux/actions";

window.addEventListener('load', () => {
  initCommonPageTemplate();
  startRouter();
  startBehaviorTrain();

  let prevState = store.getState();

  store.subscribe(():void => {

    const state = store.getState();

    gameModeBehaviorToggle(state.gameMode);
    gameStartTrack(state.isGameStarted);

    const isStateChanged = prevState.gameMode !== state.gameMode;

    if(isStateChanged && state.gameMode === GAME_MODES.TRAIN) {
      setTimeout(stopGameAction)
    }

    if(isStateChanged && !state.isGameStarted) {
      setTimeout(() => {
        mistakesCountAction(false);
      })
    }

    prevState = state;
  });
})