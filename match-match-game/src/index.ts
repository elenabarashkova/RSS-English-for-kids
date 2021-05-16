import "./style.css";
import { insertHtml } from "./common/shared";
import { renderMenu } from "./header/render-header";
import { startRouter } from "./header/router";
import { renderRegisterPopup } from "./pages/register/render-register-popup";
import { startRegisterFormBehavior } from "./pages/register/register-form";
import { startValidation } from "./pages/register/validation";
import "./common/indexedDB";

const header = require('./header/header.html');

window.addEventListener('load', () => {
  insertHtml(header.default);
  renderMenu();
  insertHtml(`<main id="main" class="container"></main>`);
  startRouter();
  insertHtml(renderRegisterPopup);
  startRegisterFormBehavior();
  startValidation();
});