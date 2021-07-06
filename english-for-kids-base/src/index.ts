import "./style.css";
import store from "./redux/store";
import { initCommonPageTemplate } from "./components";
import { startRouter } from "./router";
import { gameModeBehaviorToggle, gameStartTrack } from "./components/game-mode";
import { startBehaviorTrain } from "./components/game-mode/train-mode";
import { CATEGORY_ROUTE } from "./router/constants";

window.addEventListener('load', () => {
  initCommonPageTemplate();
  startRouter();
  startBehaviorTrain();

  let prevState = store.getState();

  store.subscribe(():void => {
    const state = store.getState();

    const isGameModeChanged = prevState.gameMode !== state.gameMode;
    const isPageChanged = prevState.currentPage !== state.currentPage;
    const isCurrentPageCategory = state.currentPage === CATEGORY_ROUTE;
    const isCategoryChanged = prevState.currentCategory !== state.currentCategory;

    const shouldSwitchGameBehavior = isGameModeChanged || (isPageChanged && isCurrentPageCategory) || isCategoryChanged;

    if (shouldSwitchGameBehavior) {
      gameModeBehaviorToggle(state.gameMode);
    }
    gameStartTrack(state.isGameStarted);

    prevState = state;
  });
})