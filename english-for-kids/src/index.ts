import "./style.css";
import store from "./redux/store";
import { initCommonPageTemplate } from "./components";
import { startRouter } from "./router";
import { gameModeBehaviorToggle } from "./components/game-mode";
import { startBehaviorTrain } from "./components/game-mode/train-mode";


window.addEventListener('load', () => {
  initCommonPageTemplate();
  startRouter();
  startBehaviorTrain();

  store.subscribe(():void => {
    const state = store.getState();

    gameModeBehaviorToggle(state.game.gameMode);

    if(state.game.isGameStarted) {
      document.getElementById('mainWrap')?.classList.add('game-started');
    }
    else if(!state.game.isGameStarted) {
      document.getElementById('mainWrap')?.classList.remove('game-started');
    }
  });
})