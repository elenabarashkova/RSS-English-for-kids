import "./style.css";
import store from "./redux/core/store";
import { initCommonPageTemplate } from "./modules";
import { startRouting } from "./modules/header";
import { onCarsListUpdate } from "./modules/garage";
import { disablePagination } from "./modules/pagination";
import { CARS_LIMIT } from "./shared/constants";

window.addEventListener('load', () => {
  let state = store.getState();

  initCommonPageTemplate();
  startRouting();

  store.subscribe((prevState:State):void => {
    state = store.getState();

    if (prevState.carsList !== state.carsList) {
      onCarsListUpdate(state.carsList, state.totalCars);
    }

    disablePagination(Math.ceil(state.totalCars/CARS_LIMIT));
  });
})