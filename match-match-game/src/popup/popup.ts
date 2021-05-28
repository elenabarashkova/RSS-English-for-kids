export const initializeClosing = (): void => {
  document.querySelector('.popup.active')?.classList.remove('active');

  document.getElementById('winPopup')?.remove();
}

export const closePopupHandler = (event: MouseEvent): void => {
  const eventTarget = event.target as Element;
  const closeBtn = document.querySelector('.btn-close');
  const targetsPopup = eventTarget?.closest('.popup-wrap');

  if (eventTarget === closeBtn || targetsPopup === null) {
    initializeClosing();
    document.removeEventListener('click', closePopupHandler);
  }
}

export const openPopupHandler = (event: MouseEvent): void => {
  const eventTarget = event.target as HTMLElement;
  const targetPopup = document.getElementById(`${ eventTarget.dataset.target }`);

  targetPopup?.classList.add('active');

  setTimeout(() => document.addEventListener('click', closePopupHandler), 0);
}
