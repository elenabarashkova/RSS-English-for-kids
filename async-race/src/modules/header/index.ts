import { ROUTES, PAGES_CONFIG, DEFAULT_PAGE } from "../constants";
import { setActivePage } from "../../redux/actions";

const renderHeader = ():void => {

  const renderMenuItems = () =>
    Object.values(ROUTES).map(pageId => (`
      <button id="${pageId}">${PAGES_CONFIG[pageId].name}</button>
  `)).join('');

  const html = (`
    <header id="header">
      ${renderMenuItems()}
    </header> 
  `);
  document.body.insertAdjacentHTML('beforeend', html);
}

export const initHeader = (store: Store):void => {
  renderHeader();

  document.getElementById(DEFAULT_PAGE)?.classList.add('active');

  const header = document.getElementById('header');

  header?.addEventListener('click', (event:Event) => {
    const target = event.target as HTMLElement;

    if(target !== header) {
      store.dispatch(setActivePage(target.id));

      [...(header?.getElementsByTagName('button') as HTMLCollection)]
        .map(btn => btn.classList.remove('active'));

      target.classList.add('active');
    }
  });
}