import "./style.css";
import store from "./redux/core/store";
import { initCommonPageTemplate } from "./modules";
import { createCar, deleteCar, setCarsList, updateCar } from "./redux/actions";
import { renderCarsList } from "./modules/garage/render";
import { startRouting } from "./modules/header";


window.addEventListener('load', () => {
  let state = store.getState();

  initCommonPageTemplate();
  startRouting();

  store.subscribe((prevState:State):void => {
    state = store.getState();

    if(prevState.carsList !== state.carsList) {
      renderCarsList(state.carsList);
    }
  });
})