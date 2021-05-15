const closePopup = (event: MouseEvent) => {
  const eventTarget = event.target as Element;
  const closeBtn = document.querySelector('.btn-close');
  const targetsPopup = eventTarget?.closest('.popup');
  if(eventTarget === closeBtn || targetsPopup === null) {
    const body = document.querySelector('body');
    body?.classList.remove('popup-on');
    document.querySelector('.popup.active')?.classList.remove('active');
    document.removeEventListener('click', closePopup);
  }
}

export const openPopup = (event: MouseEvent) => {
  const body = document.querySelector('body');
  body?.classList.add('popup-on');
  const eventTarget = event.target as HTMLElement;
  const targetPopup = document.getElementById(`${eventTarget.dataset.target}`);
  targetPopup?.classList.add('active');
  setTimeout(() => document.addEventListener('click', closePopup), 0);
}
