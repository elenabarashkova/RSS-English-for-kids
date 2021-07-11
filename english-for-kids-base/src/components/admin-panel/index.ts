import { initPublicPageTemplate, stopPublicPageTemplate } from "../index";
import { getAdminPanelInner } from "./render";
import { redirectToDefaultPage } from "../../shared";
import { getCategories } from "../../server";

export const startAdminPanel = async (): Promise<void> => {
  stopPublicPageTemplate();

  const mainWrap = document.getElementById('mainWrap') as HTMLElement;

  mainWrap?.insertAdjacentHTML('beforeend', getAdminPanelInner());
  getCategories();

  const logoutBtn = document.getElementById('logoutBtn');
  logoutBtn?.addEventListener('click', () => {
    redirectToDefaultPage();
    initPublicPageTemplate();
  });
}