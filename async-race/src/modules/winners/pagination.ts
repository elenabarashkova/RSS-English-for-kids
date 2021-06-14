import { getWinnersPageNumber } from "../../shared";
import { getWinners } from "../../services/service-requests";

export const onWinnersHashChange = (): void => {
  getWinners();
}

export const handlePagination = (): void => {
  window.addEventListener("hashchange", onWinnersHashChange);
}

export const pagination = ():void => {
  const prevPage = document.getElementById('prevPageWinners');
  const nextPage = document.getElementById('nextPageWinners');

  const re = /winners=\d+/;

  prevPage?.addEventListener('click', () => {
    const currentPage = getWinnersPageNumber();

    if(currentPage) {
      window.location.hash = window.location.hash.replace(re, `winners=${currentPage - 1}`);
    }
  })

  nextPage?.addEventListener('click', () => {
    const currentPage = getWinnersPageNumber();

    if(currentPage) {
      window.location.hash = window.location.hash.replace(re, `winners=${currentPage + 1}`);
    }
  });
}

export const disableWinnersPagination = (maxPageNumber: number):void => {
  const prevPage = document.getElementById('prevPageWinners') as HTMLButtonElement;
  const nextPage = document.getElementById('nextPageWinners') as HTMLButtonElement;

  if(!prevPage || !nextPage) {
    return;
  }

  const currentPage = getWinnersPageNumber();

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
