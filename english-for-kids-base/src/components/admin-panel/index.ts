import { initPublicPageTemplate, stopPublicPageTemplate } from "../index";
import { getAdminPanelInner } from "./render";
import { redirectToDefaultPage } from "../../shared";
import { renderCateroryCards } from "./category/render-card";
import { getCategories } from "../../server";
import { ServerCategoryList } from "./types";

export const startAdminPanel = async (): Promise<void> => {
  stopPublicPageTemplate();

  const mainWrap = document.getElementById('mainWrap') as HTMLElement;

  mainWrap?.insertAdjacentHTML('beforeend', getAdminPanelInner());
  getCategories();

  const logoutBtn = document.getElementById('logoutBtn');
  logoutBtn?.addEventListener('click', () => {
    // stop admin pagetemplate ?
    redirectToDefaultPage();
    initPublicPageTemplate();
  });

}

export const renderAllCatCards = (cats: ServerCategoryList): void => {
  const adminPanelPageInner = document.getElementById('adminPanelPageInner')
  adminPanelPageInner?.insertAdjacentHTML('beforeend', renderCateroryCards(cats));
}