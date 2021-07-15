import "./style.css";
import store from "./redux/store";
import { initCommonPageTemplate, initPublicPageTemplate } from "./components";
import { startRouter } from "./router";
import { gameModeBehaviorToggle, gameStartTrack } from "./components/game-mode";
import { ADMIN_ROUTE, ADMIN_ROUTE_WORDS, CATEGORY_ROUTE, MAIN_ROUTE } from "./router/constants";
import { initializeDB } from "./components/indexedDB";
import { startAdminCategories } from "./components/admin-panel/category";
import { startAdminWords } from "./components/admin-panel/word";
import { renderMainPage } from "./components/main-page";
import { renderSubMenuItems } from "./components/menu/get-menu";
import { renderCategoryPage } from "./components/category";
import { removeNewCategoryCard, renderNewCategoryCard } from "./components/admin-panel/category/render";
import { removeNewWordCard, renderNewWordCard } from "./components/admin-panel/word/render";

window.addEventListener('load', () => {
  initializeDB(() => {
    initCommonPageTemplate();
    initPublicPageTemplate();
    startRouter();
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

    const prevPageIsAdmin = prevState.currentPage === ADMIN_ROUTE || prevState.currentPage === ADMIN_ROUTE_WORDS;
    const currentPageIsNotAdmin = state.currentPage !== ADMIN_ROUTE && prevState.currentPage !== ADMIN_ROUTE_WORDS;

    const shouldSwitchGameBehavior = isGameModeChanged || (isPageChanged && isCurrentPageCategory) || isCategoryChanged;

    if(isPageChanged && prevPageIsAdmin && currentPageIsNotAdmin) {
      initPublicPageTemplate();
    }

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

    if(prevState.creatingCategory !== state.creatingCategory && state.creatingCategory) {
      renderNewCategoryCard();
    }

    if(prevState.creatingCategory !== state.creatingCategory && !state.creatingCategory) {
      removeNewCategoryCard();
    }

    if(prevState.creatingWord !== state.creatingWord && state.creatingWord) {
      renderNewWordCard();
    }

    if(prevState.creatingWord !== state.creatingWord && !state.creatingWord) {
      removeNewWordCard();
    }

    gameStartTrack(gameState.isGameStarted);

    prevState = state;
  });
})