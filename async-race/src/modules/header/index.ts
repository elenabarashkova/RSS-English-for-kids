import { ROUTES, PAGES_CONFIG } from "../constants";

export const getHeader = ():string => {

  const renderMenuItems = () =>
    Object.values(ROUTES).map(pageId => (`
      <button id="${pageId}">${PAGES_CONFIG[pageId].name}</button>
  `)).join('');

  return (`
    <header id="header">
      ${renderMenuItems()}
    </header> 
  `);
}

export const startRouting = (store: Store):void => {
  const header = document.getElementById('header');

  header?.addEventListener('click', (event:Event) => {
    const target = event.target as HTMLElement;

    if (target.parentElement === header) {
      const prevPageBtn = [...(header?.getElementsByTagName('button') as HTMLCollection)]
        .find(btn => btn.classList.contains('active'));

      const prevPageBtnId = prevPageBtn?.id as string;
      prevPageBtn?.classList.remove('active');

      target.classList.add('active');

      PAGES_CONFIG[prevPageBtnId].stop();

      (document.getElementById('main') as HTMLElement).innerHTML = '';

      const state = store.getState();

      PAGES_CONFIG[target.id].start(state.garageFormsConfig);
    }
  });
}