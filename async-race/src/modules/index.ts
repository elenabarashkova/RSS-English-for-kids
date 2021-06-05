import { DEFAULT_PAGE, PAGES_CONFIG } from "./constants";
import { getHeader, startRouting } from "./header";

const getMain = ():string => (`
  <main id="main"></main>
`)

const renderCommonPageTemplate = ():void => {
  document.body.insertAdjacentHTML('beforeend', getHeader());
  document.body.insertAdjacentHTML('beforeend', getMain());
}

const startDefaultPage = (setCarsListAction: CallableFunction,  createCarAction: CallableFunction) => {
  document.getElementById(DEFAULT_PAGE)?.classList.add('active');

  const main = document.getElementById('main');

  if(main) {
    main.innerHTML = '';
  }

  PAGES_CONFIG[DEFAULT_PAGE].start(setCarsListAction, createCarAction);
}

export const initCommonPageTemplate = (
  setCarsListAction: CallableFunction,
  createCarAction: CallableFunction
):void => {
  renderCommonPageTemplate();
  startDefaultPage(setCarsListAction, createCarAction);
}