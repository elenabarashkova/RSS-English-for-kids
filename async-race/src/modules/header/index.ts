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

export const startRouting = (setCarsListAction: CallableFunction, createCarAction:CallableFunction):void => {
  const header = document.getElementById('header');

  header?.addEventListener('click', (event:Event) => {
    const target = event.target as HTMLElement;

    if(target.parentElement === header) {
      [...(header?.getElementsByTagName('button') as HTMLCollection)]
        .map(btn => btn.classList.remove('active'));

      target.classList.add('active');

      const main = document.getElementById('main');

      if(main) {
        main.innerHTML = '';
      }

      PAGES_CONFIG[target.id].start(setCarsListAction, createCarAction);
    }
  });
}