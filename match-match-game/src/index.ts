import "./style.css";
import { insertHtml, addMain } from "./common/shared";
import { renderMenu } from "./header/render-header";
import { startRouter } from "./header/router";
import { startRegisterFormBehavior } from "./pages/register/register-form";
import { startValidation } from "./pages/register/validation";

const header = require('./header/header.html');
const main = require('./main.html');
const registerPopupHtml = require('./pages/register/register-form.html');

window.addEventListener('load', () => {

  insertHtml(header.default);
  insertHtml(main.default);

  addMain();

  renderMenu();

  startRouter();

  insertHtml(registerPopupHtml.default);

  startRegisterFormBehavior();

  startValidation();
});