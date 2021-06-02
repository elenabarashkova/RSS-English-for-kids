import "./style.css";
import { createStore } from "./redux/create-store";
import { rootReducer } from "./redux/root-reducer";
import { initialState } from "./redux/initial-state";
import { START_APPLICATION } from "./redux/types";
import { setActiveMenuItem, startHeader } from "./header";
import { startPage } from "./pages";

window.addEventListener('load', () => {

  const store = createStore(rootReducer, initialState);

  startHeader(store);

  store.subscribe((prevState:Record<string, string>) => {
    const state = store.getState();

    const currentPageChanged = prevState.currentPage !== state.currentPage;
    const shouldInitialize = !prevState.applicationStarted && state.applicationStarted;

    if(currentPageChanged || shouldInitialize) {
      setActiveMenuItem(prevState.currentPage, state.currentPage);
      startPage(prevState.currentPage, state.currentPage, store);
    }
  });

  store.dispatch({type: START_APPLICATION});
})