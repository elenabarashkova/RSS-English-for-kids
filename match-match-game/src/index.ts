import "./style.css";
import { startRouter } from "./header/router";
import { startRegisterForm } from "./pages/register";
import { initializeDB } from "./common/indexedDB";
import {render} from "./render";


window.addEventListener('load', () => {
  render();
  initializeDB(() => {
    startRouter();
    startRegisterForm();
  });
});