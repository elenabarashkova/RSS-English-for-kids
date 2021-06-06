import "./style.css";
import { createStore } from "./redux/core/create-store";
import { rootReducer } from "./redux/root-reducer";
import { initialState } from "./redux/initial";
import { initCommonPageTemplate } from "./modules";
import { createCar, setCarsList } from "./redux/actions";
import { renderCarsList } from "./modules/garage/render";
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

    if(prevState.carsList !== state.carsList) {
      renderCarsList(state.carsList);
    }
  });
})