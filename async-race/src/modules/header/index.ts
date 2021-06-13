import { ROUTES, PAGES_CONFIG } from "../constants";
import { raceStoptHandler } from "../garage/race";
import { onGarageHashChange } from "../garage/pagination";

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

export const startRouting = ():void => {
  const header = document.getElementById('header');

  header?.addEventListener('click', (event:Event) => {
    const target = event.target as HTMLElement;

    if (target.parentElement === header) {
      [...(header?.getElementsByTagName('button') as HTMLCollection)]
        .map(btn => btn.classList.remove('active'));

      target.classList.add('active');

      (document.getElementById('main') as HTMLElement).innerHTML = '';

      window.removeEventListener("hashchange", onGarageHashChange);
      raceStoptHandler();
      // todo: remove here all event listeners for page => stopPage()

      PAGES_CONFIG[target.id].start();
    }
  });
}