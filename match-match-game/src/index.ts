import "./style.css";
import { insertHtml } from "./common/shared";
import { renderMenu } from "./header/render-header";
import { startRouter } from "./header/router";
import { startRegisterFormBehavior } from "./pages/register/register-form";
import { startValidation } from "./pages/register/validation";

const header = require('./header/header.html');
const registerPopupHtml = require('./pages/register/register-form.html');

window.addEventListener('load', () => {
  insertHtml(header.default);
  insertHtml(`<main id="main" class="container"></main>`);
  renderMenu();
  startRouter();
  insertHtml(registerPopupHtml.default);
  startRegisterFormBehavior();
  startValidation();
});