import "./style.css";
import store from "./redux/store";
// import { toggleGameMode } from "./redux/actions";
import { initCommonPageTemplate } from "./components";
import { startRouter } from "./router";

window.addEventListener('load', () => {
  const state = store.getState();

  initCommonPageTemplate();

  startRouter();

  // document.getElementById('checkbox')?.addEventListener('click', () => {
  //   toggleGameMode();
  //   console.log(store.getState());
  // })
})