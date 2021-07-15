import { initPublicPageTemplate, stopPublicPageTemplate } from "../index";
import { getAdminPanelInner } from "./render";
import { redirectToDefaultPage } from "../../shared";
import { setIsLogin } from "../indexedDB";

export const initAdminPage = (): void => {
  stopPublicPageTemplate();

  const mainWrap = document.getElementById('mainWrap') as HTMLElement;

  mainWrap?.insertAdjacentHTML('beforeend', getAdminPanelInner());

  const logoutBtn = document.getElementById('logoutBtn');

  logoutBtn?.addEventListener('click', async () => {
    await setIsLogin(false);
    redirectToDefaultPage();
    initPublicPageTemplate();
  });
}