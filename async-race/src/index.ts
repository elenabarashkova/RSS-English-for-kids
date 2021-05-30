import "./style.css";
import { renderHeader } from "./render/header";
import { createStore } from "./redux/create-store";
import { rootReducer } from "./redux/root-reducer";
import { initialState } from "./redux/initial-state";
import { PAGES } from "./shared/constants";
import { setActivePage } from "./redux/actions";


window.addEventListener('load', () => {

  const store = createStore(rootReducer, initialState);

  renderHeader();

  const garageBtn = document.getElementById(PAGES.GARAGE);
  const winnersBtn = document.getElementById(PAGES.WINNERS);

  garageBtn?.addEventListener('click', () => {
    store.dispatch(setActivePage(PAGES.GARAGE));
  });
  winnersBtn?.addEventListener('click', () => {
    store.dispatch(setActivePage(PAGES.WINNERS));
  });

  store.subscribe((prevState:Record<string, string>) => {
    const state = store.getState();
    // if(prevState.currentPage !== state.currentPage) {
      document.getElementById(prevState.currentPage)?.classList.remove('active');
      document.getElementById(state.currentPage)?.classList.add('active');
    // }
  })

  store.dispatch({type: 'START_APPLICATION'});
})