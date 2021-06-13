import "./style.css";
import store from "./redux/core/store";
import { initCommonPageTemplate } from "./modules";
import { startRouting } from "./modules/header";
import { onCarsListUpdate } from "./modules/garage";
import { disablePagination } from "./modules/garage/pagination";
import { CARS_LIMIT } from "./shared/constants";
import { createWinner } from "./services/service-requests";
import { onWinnersListUpdate } from "./modules/winners";

window.addEventListener('load', () => {
  let state = store.getState();

  initCommonPageTemplate();
  startRouting();

  store.subscribe((prevState:State):void => {
    state = store.getState();

    if (prevState.carsList !== state.carsList) {
      onCarsListUpdate(state.carsList, state.totalCars);
    }

    if(state.currentWinner !== null && prevState.currentWinner !== state.currentWinner) {
      createWinner(state.currentWinner);
    }

    if(prevState.winnersList !== state.winnersList) {
      onWinnersListUpdate(state.winnersList, state.totalWinners);
    }

    const currentGaragePage = document.querySelector('#garage.active');
    if(currentGaragePage) {
      disablePagination(Math.ceil(state.totalCars/CARS_LIMIT));
    }
  });
})