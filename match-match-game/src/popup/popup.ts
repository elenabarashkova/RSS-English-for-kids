export const initializeClosing = (): void => {
  const body = document.querySelector('body');
  body?.classList.remove('popup-on');
  document.querySelector('.popup.active')?.classList.remove('active');
}

export const closePopupHandler = (event: MouseEvent): void => {
  const eventTarget = event.target as Element;
  const closeBtn = document.querySelector('.btn-close');
  const targetsPopup = eventTarget?.closest('.popup');

  if (eventTarget === closeBtn || targetsPopup === null) {
    initializeClosing();
    document.removeEventListener('click', closePopupHandler);
  }
}

export const openPopupHandler = (event: MouseEvent): void => {
  const body = document.querySelector('body');
  body?.classList.add('popup-on');

  const eventTarget = event.target as HTMLElement;
  const targetPopup = document.getElementById(`${ eventTarget.dataset.target }`);

  targetPopup?.classList.add('active');

  setTimeout(() => document.addEventListener('click', closePopupHandler), 0);
}
