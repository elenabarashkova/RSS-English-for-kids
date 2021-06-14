import { getCars } from "../../services/service-car";
import { getGaragePageNumber } from "../../shared";
import { raceStoptHandler } from "./race";
import { clearCarsList } from "./render";

export const onGarageHashChange = (): void => {
  clearCarsList();
  getCars();
}

export const handlePagination = (): void => {
  window.addEventListener("hashchange", onGarageHashChange);
}

export const pagination = ():void => {
  const prevPage = document.getElementById('prevPage');
  const nextPage = document.getElementById('nextPage');

  const re = /garage=\d+/;

  prevPage?.addEventListener('click', () => {
    const currentPage = getGaragePageNumber();

    if(currentPage) {
      window.location.hash = window.location.hash.replace(re, `garage=${currentPage - 1}`);
    }

    raceStoptHandler();
  })

  nextPage?.addEventListener('click', () => {
    const currentPage = getGaragePageNumber();

    if(currentPage) {
      window.location.hash = window.location.hash.replace(re, `garage=${currentPage + 1}`);
    }

    raceStoptHandler();
  });
}

export const disablePagination = (maxPageNumber: number):void => {
  const prevPage = document.getElementById('prevPage') as HTMLButtonElement;
  const nextPage = document.getElementById('nextPage') as HTMLButtonElement;

  if(!prevPage || !nextPage) {
    return;
  }

  const currentPage = getGaragePageNumber();

  if (currentPage === 1) {
    prevPage.setAttribute('disabled', '');
  } else {
    prevPage.removeAttribute('disabled');
  }

  if (currentPage === maxPageNumber) {
    nextPage.setAttribute('disabled', '');
  } else {
    nextPage.removeAttribute('disabled');
  }

}
