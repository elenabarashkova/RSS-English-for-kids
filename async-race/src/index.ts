import "./style.css";
import { createStore } from "./redux/core/create-store";
import { rootReducer } from "./redux/root-reducer";
import { initialState } from "./redux/initial";
import { initCommonPageTemplate } from "./modules";
import { createCar, setCarsList } from "./redux/actions";
import { renderCar } from "./modules/garage/car/car";
import { startRouting } from "./modules/header";

window.addEventListener('load', () => {

  const store = createStore(rootReducer, initialState);
  let state = store.getState();

  const actions:Actions = {
    setCarsListAction: setCarsList(store),
    createCarAction: createCar(store),
  }

  initCommonPageTemplate(actions);
  startRouting(actions);

  store.subscribe((prevState:Record<string, string>):void => {
    state = store.getState();

    const carsList = document.getElementById('carsList');

    if(prevState.carsList !== state.carsList) {
      if(carsList) {
        carsList.innerHTML = '';
      }

      state.carsList.forEach((car: Car) => carsList?.insertAdjacentHTML('beforeend', renderCar(car)));
    }
  });
})