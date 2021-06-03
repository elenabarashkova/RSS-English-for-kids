import { PAGES_CONFIG } from "./constants";
import { initHeader } from "./header";

export const initPageTemplate = (store: Store):void => {
  initHeader(store);

  const main = document.createElement('main');
  main.id = 'main';
  document.body.appendChild(main);
}

export const startPage = (prevPageId:string, nextPageId:string, store: Store):void => {
  const main = document.getElementById('main');

  if(main) {
    main.innerHTML = '';
  }

  PAGES_CONFIG[nextPageId].start(store);
}