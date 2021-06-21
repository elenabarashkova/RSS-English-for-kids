import { ROUTES } from "../router/constants";

const DEFAULT_PAGE = ROUTES.MAIN;

export const clearMain = (): void => {
  const main = document.getElementById('main');

  if(main) {
    main.innerHTML = '';
  }
}

export const redirectToDefaultPage = (): void => {
  window.location.hash = DEFAULT_PAGE;
}