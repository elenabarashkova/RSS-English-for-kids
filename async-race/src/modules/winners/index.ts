import { insertWinnersCount, renderWinnersList, renderWinnersPage } from "./render";
import { getWinners } from "../../services/service-requests";

export const startWinnersPage = ():void => {
  renderWinnersPage();
  getWinners();
  // + future behavior();
}

export const onWinnersListUpdate = (stateWinnersList: WinnersList, stateTotalWinners: number):void => {
  renderWinnersList(stateWinnersList);
  insertWinnersCount(stateTotalWinners);
}