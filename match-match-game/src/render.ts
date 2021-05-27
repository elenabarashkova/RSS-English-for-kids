import {renderHeader} from "./header/render-header/render-header";
import {renderRegisterPopup} from "./pages/register/render-register-popup";
import {winPopup} from "./pages/game/win-popup/render-win-popup";

export const render = ():void => {
  const body = document.querySelector('body');

  const main = document.createElement('main');
  main.id = 'main';
  main.classList.add('container');

  renderHeader();

  body?.append(main);
  body?.insertAdjacentHTML('beforeend', renderRegisterPopup);
  body?.insertAdjacentHTML('beforeend', winPopup);
}