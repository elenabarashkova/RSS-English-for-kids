import "./style.css";
import { insertHtml } from "./common/shared";
import { renderMenu } from "./header/render-header";
import { startRouter } from "./header/router";
import { startRegisterForm } from "./pages/register/register-form";
import "./common/indexedDB";

const header = require('./header/header.html');

window.addEventListener('load', () => {
  insertHtml(header.default);
  renderMenu();
  insertHtml(`<main id="main" class="container"></main>`);
  startRouter();
  startRegisterForm();
});