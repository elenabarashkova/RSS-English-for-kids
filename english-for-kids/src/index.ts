import "./style.css";
import store from "./redux/store";
// import { toggleGameMode } from "./redux/actions";
import { renderCommonPageTemplate } from "./components";
import { startMainPage } from "./components/main-page";

window.addEventListener('load', () => {
  const state = store.getState();

  renderCommonPageTemplate();

  startMainPage();

  // document.getElementById('checkbox')?.addEventListener('click', () => {
  //   toggleGameMode();
  //   console.log(store.getState());
  // })
})