import { renderHeader } from "./header/render-header/render-header";
import { renderRegisterPopup } from "./pages/register/render-register-popup";
import { createMain, insertHtml } from "./common/shared"

export const render = (): void => {
  const body = document.querySelector('body');

  renderHeader();
  createMain();

  if (body) {
    insertHtml(body, renderRegisterPopup);
  }
}