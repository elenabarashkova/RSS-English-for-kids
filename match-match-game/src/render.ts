import {renderHeader} from "./header/render-header/render-header";
import {renderRegisterPopup} from "./pages/register/render-register-popup";
import {winPopup} from "./pages/game/win-popup/render-win-popup";
import {createMain, insertHtml} from "./common/shared"

export const render = ():void => {
  const body = document.querySelector('body');

  renderHeader();
  createMain();

  if(body) {
    insertHtml(body, renderRegisterPopup);
    insertHtml(body, winPopup);
  }
}