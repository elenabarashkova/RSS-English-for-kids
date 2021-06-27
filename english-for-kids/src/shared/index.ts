import { ROUTES } from "../router/constants";

const DEFAULT_PAGE = ROUTES.MAIN.url;

export const clearMain = (): void => {
  const mainWrap = document.getElementById('mainWrap');

  if(mainWrap) {
    mainWrap.innerHTML = '';
  }
}

export const redirectToDefaultPage = (): void => {
  window.location.hash = DEFAULT_PAGE;
}

export const playAudio = (audio: HTMLAudioElement) => {
  audio.currentTime = 0;
  audio.play();
}