import { insertPageNumber, insertWinnersCount, renderWinnersList, renderWinnersPage } from "./render";
import { getWinners } from "../../services/service-requests";
import { handlePagination, onWinnersHashChange, pagination } from "./pagination";
import { getWinnersPageNumber } from "../../shared";

const winnersSortingBtns = (): void => {
  const winsNumberBtn = document.getElementById('winnerWinsNumBtn');
  const bestTimeBtn = document.getElementById('winnerTimeBtn');

  winsNumberBtn?.addEventListener('click', () => {
    getWinners('ASC');
  });

  bestTimeBtn?.addEventListener('click', () => {
    getWinners('DESC');
  });
}

export const startWinnersPage = ():void => {
  renderWinnersPage();
  handlePagination();
  getWinners();
  pagination();
  winnersSortingBtns();
}

export const stopWinnersPage = (): void => {
  window.removeEventListener("hashchange", onWinnersHashChange);
}

export const onWinnersListUpdate = (stateWinnersList: WinnersList, stateTotalWinners: number):void => {
  renderWinnersList(stateWinnersList);
  insertWinnersCount(stateTotalWinners);
  insertPageNumber(getWinnersPageNumber());
}