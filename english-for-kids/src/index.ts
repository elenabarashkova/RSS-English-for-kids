import "./style.css";
import store from "./redux/store";
import { initCommonPageTemplate } from "./components";
import { startRouter } from "./router";

window.addEventListener('load', () => {
  const state = store.getState();

  initCommonPageTemplate();
  startRouter();
})