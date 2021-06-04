import { PAGES_CONFIG } from "./constants";
import { initHeader } from "./header";

export const initPageTemplate = (setActivePageAction: CallableFunction):void => {
  initHeader(setActivePageAction);

  const main = document.createElement('main');
  main.id = 'main';
  document.body.appendChild(main);
}

export const startPage = (pageName:string, store: Store):void => {
  const main = document.getElementById('main');

  if(main) {
    main.innerHTML = '';
  }

  PAGES_CONFIG[pageName].start(store);
}