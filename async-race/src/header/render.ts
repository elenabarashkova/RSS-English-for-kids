import { PAGES } from "../pages/constants";

export const renderHeader = ():void => {
  const html = (`
    <header>
      <button id="${PAGES.GARAGE}">Garage</button>
      <button id="${PAGES.WINNERS}">Winners</button>
    </header> 
  `);
  document.body.insertAdjacentHTML('beforeend', html);
}