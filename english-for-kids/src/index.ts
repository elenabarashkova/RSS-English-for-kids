import "./style.css";
import store from "./redux/store";
import { initCommonPageTemplate } from "./components";
import { startRouter } from "./router";
import { gameModeBehaviorToggle, gameStartTrack } from "./components/game-mode";
import { startBehaviorTrain } from "./components/game-mode/train-mode";


window.addEventListener('load', () => {
  initCommonPageTemplate();
  startRouter();
  startBehaviorTrain();

  store.subscribe(():void => {
    const state = store.getState();

    gameModeBehaviorToggle(state.game.gameMode);
    gameStartTrack(state.game.isGameStarted);
  });
})