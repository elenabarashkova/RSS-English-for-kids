import { insertPageNumber, insertWinnersCount, renderWinnersList, renderWinnersPage } from "./render";
import { getWinners } from "../../services/service-requests";
import { handlePagination, pagination } from "./pagination";
import { getWinnersPageNumber } from "../../shared";

export const startWinnersPage = ():void => {
  renderWinnersPage();
  handlePagination();
  getWinners();
  pagination();
}

export const stopWinnersPage = (): void => {
  window.removeEventListener("hashchange", getWinners);
}

export const onWinnersListUpdate = (stateWinnersList: WinnersList, stateTotalWinners: number):void => {
  renderWinnersList(stateWinnersList);
  insertWinnersCount(stateTotalWinners);
  insertPageNumber(getWinnersPageNumber());
}