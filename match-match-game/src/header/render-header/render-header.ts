import {renderMenu} from "./render-menu";
import {renderHeaderBtns} from "./render-header-btns";

const headerLogo = ():string =>
  (`
  <div class="header-item logo">
    <h1>
      <span>Match</span>
      <span>Match</span>
    </h1>
  </div>
  `)

export const renderHeader = ():void => {
  const body = document.querySelector('body');

  const header = document.createElement('header');
  body?.append(header);

  const headerContainer = document.createElement('div');
  headerContainer.classList.add('container');

  header?.append(headerContainer);

  headerContainer.insertAdjacentHTML('beforeend', headerLogo());
  headerContainer.insertAdjacentHTML('beforeend', renderMenu());
  headerContainer.insertAdjacentHTML('beforeend', renderHeaderBtns());
}



