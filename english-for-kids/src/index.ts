import "./style.css";
import store from "./redux/store";
// import { toggleGameMode } from "./redux/actions";
import { renderCommonPageTemplate } from "./components";
import { startRouter } from "./router";

window.addEventListener('load', () => {
  const state = store.getState();

  renderCommonPageTemplate();

  startRouter();

  // document.getElementById('checkbox')?.addEventListener('click', () => {
  //   toggleGameMode();
  //   console.log(store.getState());
  // })
})