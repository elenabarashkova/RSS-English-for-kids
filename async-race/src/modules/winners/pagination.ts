import { getWinnersPageNumber } from "../../shared";
import { getWinners } from "../../services/service-winners";

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