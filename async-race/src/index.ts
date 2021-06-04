import "./style.css";
import { createStore } from "./redux/core/create-store";
import { rootReducer } from "./redux/root-reducer";
import { initialState } from "./redux/initial";
import { initPageTemplate, startPage } from "./modules";
import { createCar, setActivePage, setCarsList } from "./redux/actions";
import { renderCar } from "./modules/garage/car/car";

const startActivePage = (pageName:string, setCarsListAction:CallableFunction, createCarAction:CallableFunction) => {
  startPage(pageName, setCarsListAction, createCarAction);
}

window.addEventListener('load', () => {

  const store = createStore(rootReducer, initialState);
  const setActivePageAction = setActivePage(store);
  const setCarsListAction = setCarsList(store);
  const createCarAction = createCar(store);

  initPageTemplate(setActivePageAction);

  let state = store.getState();
  startActivePage(state.currentPage, setCarsListAction, createCarAction)

  store.subscribe((prevState:Record<string, string>):void => {
    state = store.getState();

    if(prevState.currentPage !== state.currentPage) {
      startActivePage(state.currentPage, setCarsListAction, createCarAction)
    }
  });

  store.subscribe((prevState:Record<string, string>):void => {
    const carsList = document.getElementById('carsList');
    state = store.getState();

    if(prevState.carsList !== state.carsList) {
      if(carsList) {
        carsList.innerHTML = '';
      }

      state.carsList.forEach((car: Car) => carsList?.insertAdjacentHTML('beforeend', renderCar(car)));
    }
  })
})