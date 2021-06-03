import "./style.css";
import { createStore } from "./redux/create-store";
import { rootReducer } from "./redux/root-reducer";
import { initialState } from "./redux/initial-state";
import { setActiveMenuItem } from "./modules/header";
import { initPageTemplate, startPage } from "./modules";

const startActivePage = (prevPageId:string, nextPageId:string, store:Store) => {
  setActiveMenuItem(prevPageId, nextPageId);
  startPage(prevPageId, nextPageId, store);
}

window.addEventListener('load', () => {

  const store = createStore(rootReducer, initialState);

  initPageTemplate(store);
  startActivePage('', store.getState().currentPage, store)

  store.subscribe((prevState:Record<string, string>):void => {
    const state = store.getState();

    if(prevState.currentPage !== state.currentPage) {
      startActivePage(prevState.currentPage, state.currentPage, store)
    }
  });
})