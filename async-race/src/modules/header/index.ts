import { ROUTES, PAGES_CONFIG } from "../constants";
import { setActivePage } from "../../redux/actions";

const renderHeader = ():void => {

  const renderMenuItems = () =>
    Object.values(ROUTES).map(pageId => (`
      <button id="${pageId}">${PAGES_CONFIG[pageId].name}</button>
  `)).join('');

  const html = (`
    <header>
      ${renderMenuItems()}
    </header> 
  `);
  document.body.insertAdjacentHTML('beforeend', html);
}

export const initHeader = (store: Store):void => {
  renderHeader();

  const garageBtn = document.getElementById(ROUTES.GARAGE);
  const winnersBtn = document.getElementById(ROUTES.WINNERS);

  garageBtn?.addEventListener('click', () => {
    store.dispatch(setActivePage(ROUTES.GARAGE));
  });
  winnersBtn?.addEventListener('click', () => {
    store.dispatch(setActivePage(ROUTES.WINNERS));
  });
}

export const setActiveMenuItem = (prevPageId:string, nextPageId:string):void => {
  document.getElementById(prevPageId)?.classList.remove('active');
  document.getElementById(nextPageId)?.classList.add('active');
}