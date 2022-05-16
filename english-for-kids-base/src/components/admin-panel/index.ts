import { initPublicPageTemplate, stopPublicPageTemplate } from "../index";
import { getAdminPanelInner } from "./render";
import { redirectToDefaultPage } from "../../shared";
import { setLogin } from "../indexedDB";
import { logout } from "../../server/login";

export const initAdminPage = (): void => {
  stopPublicPageTemplate();

  const mainWrap = document.getElementById('mainWrap') as HTMLElement;

  mainWrap?.insertAdjacentHTML('beforeend', getAdminPanelInner());

  const logoutBtn = document.getElementById('logoutBtn');

  logoutBtn?.addEventListener('click', async () => {
    await logout();
    await setLogin(0);
    redirectToDefaultPage();
    initPublicPageTemplate();
  });
}