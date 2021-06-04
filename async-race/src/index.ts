import "./style.css";
import { createStore } from "./redux/core/create-store";
import { rootReducer } from "./redux/root-reducer";
import { initialState } from "./redux/initial";
import { initPageTemplate, startPage } from "./modules";
import { setActivePage } from "./redux/actions";

const startActivePage = (pageName:string, store:Store) => {
  startPage(pageName, store);
}

window.addEventListener('load', () => {

  const store = createStore(rootReducer, initialState);
  const setActivePageAction = setActivePage(store);

  initPageTemplate(setActivePageAction);

  startActivePage(store.getState().currentPage, store)

  store.subscribe((prevState:Record<string, string>):void => {
    const state = store.getState();

    if(prevState.currentPage !== state.currentPage) {
      startActivePage(state.currentPage, store)
    }
  });
})