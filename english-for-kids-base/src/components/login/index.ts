import { removeLogin, renderLogin } from "./render";
import { startValidation } from "./validation";

const startLogin = (): void => {
  renderLogin();

  const cancelLogin = document.getElementById('cancelLogin');

  cancelLogin?.addEventListener('click', removeLogin);

  startValidation();
}

export const initLogin = (): void => {
  const loginBtn = document.getElementById('loginBtn');

  loginBtn?.addEventListener('click', () => {
    startLogin();
  })
}