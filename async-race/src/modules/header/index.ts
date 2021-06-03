import { PAGES, PAGES_CONFIG } from "../constants";
import { setActivePage } from "../../redux/actions";

const renderHeader = ():void => {

  const renderMenuItems = () =>
    Object.values(PAGES).map(pageId => (`
      <button id="${pageId}">${PAGES_CONFIG[pageId].name}</button>
  `)).join('');

  const html = (`
    <header>
      ${renderMenuItems()};
    </header> 
  `);
  document.body.insertAdjacentHTML('beforeend', html);
}

export const startHeader = (store: Store):void => {
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

export const setActiveMenuItem = (prevPageId:string, nextPageId:string):void => {
  document.getElementById(prevPageId)?.classList.remove('active');
  document.getElementById(nextPageId)?.classList.add('active');
}