import { getCars } from "../services/service-requests";
import { getGaragePageNumber } from "../shared";

export const handlePagination = (): void => {
  if (!window.location.hash) {
    window.location.hash = '1';
  }

  window.addEventListener("hashchange", getCars);
}

export const pagination = ():void => {
  const prevPage = document.getElementById('prevPage');
  const nextPage = document.getElementById('nextPage');

  prevPage?.addEventListener('click', () => {
    const currentPage = getGaragePageNumber();

    if(currentPage) {
      window.location.hash = `${currentPage - 1}`;
    }
  })

  nextPage?.addEventListener('click', () => {
    const currentPage = getGaragePageNumber();

    if(currentPage) {
      window.location.hash = `${currentPage + 1}`;
    }
  });
}

export const disablePagination = (maxPageNumber: number):void => {
  const prevPage = document.getElementById('prevPage') as HTMLButtonElement;
  const nextPage = document.getElementById('nextPage') as HTMLButtonElement;

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
