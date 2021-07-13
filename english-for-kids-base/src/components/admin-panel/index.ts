import { initPublicPageTemplate, stopPublicPageTemplate } from "../index";
import { getAdminPanelInner } from "./render";
import { redirectToDefaultPage } from "../../shared";

export const initAdminPage = (): void => {
  stopPublicPageTemplate();

  const mainWrap = document.getElementById('mainWrap') as HTMLElement;

  mainWrap?.insertAdjacentHTML('beforeend', getAdminPanelInner());

  const logoutBtn = document.getElementById('logoutBtn');

  logoutBtn?.addEventListener('click', () => {
    redirectToDefaultPage();
    initPublicPageTemplate();
  });
}