import "./style.css";
import { startRouter } from "./header/router";
import { startRegisterForm } from "./pages/register/register-form";
import { initializeDB } from "./common/indexedDB";
import {render} from "./render";


window.addEventListener('load', () => {
  render();
  initializeDB(() => {
    startRouter();
    startRegisterForm();
  });
});