import { removeLogin, renderLogin } from "./render";

const startLogin = (): void => {
  renderLogin();

  const cancelBtn = document.getElementById('cancelLogin');

  cancelBtn?.addEventListener('click', removeLogin);
}

export const initLogin = (): void => {
  const loginBtn = document.getElementById('loginBtn');

  loginBtn?.addEventListener('click', () => {
    startLogin();
  })
}