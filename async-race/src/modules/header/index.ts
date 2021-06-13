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
      const prevPageBtn = [...(header?.getElementsByTagName('button') as HTMLCollection)]
        .find(btn => btn.classList.contains('active'));

      const prevPageBtnId = prevPageBtn?.id as string;
      prevPageBtn?.classList.remove('active');

      target.classList.add('active');

      (document.getElementById('main') as HTMLElement).innerHTML = '';



      PAGES_CONFIG[prevPageBtnId].stop();
      PAGES_CONFIG[target.id].start();
    }
  });
}