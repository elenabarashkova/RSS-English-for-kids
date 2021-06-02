import { renderHeader } from "./render";
import { PAGES } from "../pages/constants";
import { setActivePage } from "../redux/actions";

export const startHeader = (store: Store) => {
  renderHeader();

  const garageBtn = document.getElementById(PAGES.GARAGE);
  const winnersBtn = document.getElementById(PAGES.WINNERS);

  garageBtn?.addEventListener('click', () => {
    store.dispatch(setActivePage(PAGES.GARAGE));
  });
  winnersBtn?.addEventListener('click', () => {
    store.dispatch(setActivePage(PAGES.WINNERS));
  });
}

export const setActiveMenuItem = (prevPageId:string, nextPageId:string) => {
  document.getElementById(prevPageId)?.classList.remove('active');
  document.getElementById(nextPageId)?.classList.add('active');
}