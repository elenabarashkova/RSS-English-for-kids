import "./style.css";
import store from "./redux/core/store";
import { initCommonPageTemplate } from "./modules";
import { startRouting } from "./modules/header";
import { onCarsListUpdate } from "./modules/garage";
import { disablePagination } from "./modules/garage/pagination";
import { CARS_LIMIT } from "./shared/constants";
import { createWinner } from "./services/service-requests";

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
      console.log(`Winner is ${state.currentWinner.id}! Time is ${state.currentWinner.time}`);
      createWinner(state.currentWinner);
    }

    disablePagination(Math.ceil(state.totalCars/CARS_LIMIT));
  });
})