import "./style.css";
import store from "./redux/store";
import { initCommonPageTemplate } from "./components";
import { startRouter } from "./router";
import { GAME_MODES } from "./shared/constants";
import { cardBehaviorTrain, stopCardBehaviorTrain } from "./components/card";

window.addEventListener('load', () => {
  // let state = store.getState();

  initCommonPageTemplate();
  startRouter();

  store.subscribe(():void => {
    const state = store.getState();

    if(state.gameMode === GAME_MODES.TRAIN) {
      console.log('stop card behavior GAME');
      cardBehaviorTrain();
    }
    else if(state.gameMode === GAME_MODES.GAME) {
      stopCardBehaviorTrain();
      console.log('start card behavior GAME');
    }
  });
})