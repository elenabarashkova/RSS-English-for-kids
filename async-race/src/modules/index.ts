import { DEFAULT_PAGE, PAGES_CONFIG } from "./constants";
import { getHeader } from "./header";

const getMain = ():string => (`
  <main id="main"></main>
`)

const renderCommonPageTemplate = ():void => {
  document.body.insertAdjacentHTML('beforeend', getHeader());
  document.body.insertAdjacentHTML('beforeend', getMain());
}

const startDefaultPage = () => {
  document.getElementById(DEFAULT_PAGE)?.classList.add('active');

  (document.getElementById('main') as HTMLElement).innerHTML = '';

  PAGES_CONFIG[DEFAULT_PAGE].start({} as GarageFormsConfig);
}

export const initCommonPageTemplate = ():void => {
  renderCommonPageTemplate();
  startDefaultPage();
}