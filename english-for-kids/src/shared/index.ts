import { MAIN_ROUTE } from "../router/constants";

export const DEFAULT_PAGE = MAIN_ROUTE;

export const clearMain = (): void => {
  const mainWrap = document.getElementById('mainWrap');

  if(mainWrap) {
    mainWrap.innerHTML = '';
  }
}

export const redirectToDefaultPage = (): void => {
  window.location.hash = DEFAULT_PAGE;
}

export const playAudioTag = (audio: HTMLAudioElement): void => {
  audio.currentTime = 0;
  audio.play();
}

export const playAudioSound = (path: string): void => {
  const audio = new Audio(path);
  audio.play();
}