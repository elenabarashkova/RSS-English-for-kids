import { body } from "../common/shared";

function closePopup(event: MouseEvent) {
  const eventTarget = event.target as Element;
  if(eventTarget === document.querySelector('.btn-close') || eventTarget?.closest('.popup') === null) {
    body?.classList.remove('popup-on');
    document.querySelector('.popup.active')?.classList.remove('active');
    document.removeEventListener('click', closePopup);
  }
}

export function openPopup(event: MouseEvent) {
  body?.classList.add('popup-on');
  const eventTarget = event.target as HTMLElement;
  const targetPopup = document.getElementById(`${eventTarget.dataset.target}`);
  targetPopup?.classList.add('active');
  setTimeout(() => document.addEventListener('click', closePopup), 0);
}


