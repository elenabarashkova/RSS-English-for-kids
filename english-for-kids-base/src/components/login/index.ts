import { removeLogin, renderLogin } from "./render";
import { ADMIN_ROUTE } from "../../router/constants";

const startLogin = (): void => {
  renderLogin();

  const cancelLogin = document.getElementById('cancelLogin');
  cancelLogin?.addEventListener('click', removeLogin);

  const submitLogin = document.getElementById('submitLogin');
  submitLogin?.addEventListener('click', (event: Event) => {
    // todo: check if user is admin on server
    window.location.hash = ADMIN_ROUTE;
  });
}

export const initLogin = (): void => {
  const loginBtn = document.getElementById('loginBtn');

  loginBtn?.addEventListener('click', () => {
    startLogin();
  })
}