import "./style.css";
import store from "./redux/core/store";
import { initCommonPageTemplate } from "./modules";
import { startRouting } from "./modules/header";
import { onCarsListUpdate } from "./modules/garage";
import { getCars } from "./services/service-requests";
import { disablePagination } from "./modules/pagination";
import { startCarAnimation, stopCarEngine } from "./modules/garage/car/car-animation";
import { insertPageNumber } from "./modules/garage/render";

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
      insertPageNumber(state.pageNumber);
      getCars();
    }

    disablePagination(state.pageNumber, Math.ceil(state.totalCars/7));

    if(prevState.startedCarsList.length < state.startedCarsList.length) {
      startCarAnimation(state.startedCarsList[state.startedCarsList.length - 1]);

    } else if (prevState.startedCarsList.length > state.startedCarsList.length) {
      const stoppedCar = prevState.startedCarsList.find(car => state.startedCarsList.indexOf(car) === -1);

      stopCarEngine(stoppedCar?.id as number);
    }
  });
})