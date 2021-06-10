import "./style.css";
import store from "./redux/core/store";
import { initCommonPageTemplate } from "./modules";
import { startRouting } from "./modules/header";
import { onCarsListUpdate } from "./modules/garage";
import { getCars } from "./services/service-requests";
import { disablePagination } from "./modules/pagination";
import { startCarAnimation } from "./modules/garage/car/car-animation";

window.addEventListener('load', () => {
  let state = store.getState();

  initCommonPageTemplate();
  startRouting();

  store.subscribe((prevState:State):void => {
    state = store.getState();

    if(prevState.carsList !== state.carsList) {
      onCarsListUpdate(state.carsList, state.totalCars);
    }

    if(prevState.pageNumber !== state.pageNumber) {
      getCars();
    }

    disablePagination(state.pageNumber, Math.ceil(state.totalCars/7));

    if(prevState.startedCarsList !== state.startedCarsList) {
      startCarAnimation(state.startedCarsList[state.startedCarsList.length - 1]);
    }
  });
})