import { DEFAULT_PAGE, PAGES_CONFIG } from "./constants";
import { getHeader } from "./header";

const getMain = ():string => (`
  <main id="main"></main>
`)

const renderCommonPageTemplate = ():void => {
  document.body.insertAdjacentHTML('beforeend', getHeader());
  document.body.insertAdjacentHTML('beforeend', getMain());
}

const startDefaultPage = (actions: Actions) => {
  document.getElementById(DEFAULT_PAGE)?.classList.add('active');

  const main = document.getElementById('main');

  if(main) {
    main.innerHTML = '';
  }

  PAGES_CONFIG[DEFAULT_PAGE].start(actions);
}

export const initCommonPageTemplate = (actions: Actions):void => {
  renderCommonPageTemplate();
  startDefaultPage(actions);
}