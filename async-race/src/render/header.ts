import { PAGES } from "../shared/constants";

export const renderHeader = () => {
  const html = (`
    <header>
      <button id="${PAGES.GARAGE}">Garage</button>
      <button id="${PAGES.WINNERS}">Winners</button>
    </header> 
  `);
  document.body.insertAdjacentHTML('beforeend', html);
}