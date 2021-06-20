import "./style.css";
import store from "./redux/store";
import { toggleGameMode } from "./redux/actions";

window.addEventListener('load', () => {
  const state = store.getState();

  document.getElementById('checkbox')?.addEventListener('click', () => {
    toggleGameMode();
    console.log(store.getState());
  })
})