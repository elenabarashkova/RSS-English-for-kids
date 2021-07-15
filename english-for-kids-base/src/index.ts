import "./style.css";
import store from "./redux/store";
import { initCommonPageTemplate, initPublicPageTemplate } from "./components";
import { startRouter } from "./router";
import { gameModeBehaviorToggle, gameStartTrack } from "./components/game-mode";
import { CATEGORY_ROUTE, MAIN_ROUTE } from "./router/constants";
import { initializeDB } from "./components/indexedDB";
import { startAdminCategories } from "./components/admin-panel/category";
import { startAdminWords } from "./components/admin-panel/word";
import { renderMainPage } from "./components/main-page";
import { renderSubMenuItems } from "./components/menu/get-menu";
import { renderCategoryPage } from "./components/category";

window.addEventListener('load', () => {
  initializeDB(() => {
    initCommonPageTemplate();
    initPublicPageTemplate();
    startRouter();
    // startBehaviorTrain();
  });

  let prevState = store.getState();

  store.subscribe(():void => {
    const state = store.getState();
    const gameState = state.game;
    const prevGameState = prevState.game;

    const isGameModeChanged = prevGameState.gameMode !== gameState.gameMode;
    const isPageChanged = prevState.currentPage !== state.currentPage;
    const isCurrentPageCategory = state.currentPage === CATEGORY_ROUTE;
    const isCategoryChanged = prevState.currentCategory !== state.currentCategory;

    const shouldSwitchGameBehavior = isGameModeChanged || (isPageChanged && isCurrentPageCategory) || isCategoryChanged;

    if(prevState.categoriesList !== state.categoriesList && !state.currentCategory) {
      startAdminCategories(state.categoriesList);
    }

    if(prevState.categoriesList !== state.categoriesList) {
      renderSubMenuItems(state.categoriesList);
    }

    if((prevState.categoriesList !== state.categoriesList || isPageChanged) && state.currentPage === MAIN_ROUTE) {
      renderMainPage(state.categoriesList);
    }

    if(prevState.wordsList !== state.wordsList) {
      startAdminWords(state.wordsList);
    }

    if(prevState.wordsList !== state.wordsList && state.currentPage === CATEGORY_ROUTE) {
      renderCategoryPage(state.wordsList);
      gameModeBehaviorToggle(gameState.gameMode);
    }

    if (shouldSwitchGameBehavior) {
      gameModeBehaviorToggle(gameState.gameMode);
    }

    gameStartTrack(gameState.isGameStarted);

    prevState = state;
  });
})