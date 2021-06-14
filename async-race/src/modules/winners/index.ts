import { insertPageNumber, insertWinnersCount, renderWinnersList, renderWinnersPage } from "./render";
import { getWinners } from "../../services/service-winners";
import { handlePagination, onWinnersHashChange, pagination } from "./pagination";
import { getWinnersPageNumber } from "../../shared";

const winnersSortingBtns = (): void => {
  const winsNumberBtn = document.getElementById('winnerWinsNumBtn');
  const bestTimeBtn = document.getElementById('winnerTimeBtn');

  winsNumberBtn?.addEventListener('click', () => {
    winsNumberBtn.classList.toggle('desc');

    if(winsNumberBtn.classList.contains('desc')) {
      getWinners('wins','DESC');
    } else {
      getWinners('wins','ASC');
    }
  });

  bestTimeBtn?.addEventListener('click', () => {
    bestTimeBtn.classList.toggle('asc');

    if(bestTimeBtn.classList.contains('asc')) {
      getWinners('time','ASC');
    } else {
      getWinners('time','DESC');
    }
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