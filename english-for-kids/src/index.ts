import "./style.css";
import store from "./redux/store";
import { initCommonPageTemplate } from "./components";
import { startRouter } from "./router";
import { gameModeBehaviorToggle } from "./components/game-mode";

window.addEventListener('load', () => {
  initCommonPageTemplate();
  startRouter();

  store.subscribe(():void => {
    const state = store.getState();

    gameModeBehaviorToggle(state.gameMode);
  });
})