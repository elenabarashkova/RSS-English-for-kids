const body = document.querySelector('body');

function closePopup(event: MouseEvent) {
  console.log(event.target);
  const eventTarget = event.target as Element;
  if(eventTarget === document.querySelector('.btn-close') || eventTarget?.closest('.popup') === null) {
    body?.classList.remove('popup-on');
    const popup = document.querySelector('.popup.active');
    popup?.classList.remove('active');
    document.removeEventListener('click', closePopup);
  }
}

export function openPopup(this: HTMLElement) {
  body?.classList.add('popup-on');
  const targetPopupId = this.getAttribute('data-target');
  const targetPopup = document.getElementById(`${targetPopupId}`);
  targetPopup?.classList.add('active');
  setTimeout(() => document.addEventListener('click', closePopup), 0);
}


