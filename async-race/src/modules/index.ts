import { PAGES_CONFIG } from "./constants";
import { startHeader } from "./header";

export const initPageTemplate = (store: Store):void => {
  startHeader(store);

  const mainWrap = document.createElement('main');
  mainWrap.id = 'main';
  document.body.appendChild(mainWrap);
}

export const startPage = (prevPageId:string, nextPageId:string, store: Store):void => {
  const main = document.getElementById('main');

  if(main) {
    main.innerHTML = '';
  }

  PAGES_CONFIG[nextPageId].start(store);
}