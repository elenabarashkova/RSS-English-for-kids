import { renderWinnersList, renderWinnersPage } from "./render";
import { getWinners } from "../../services/service-requests";

export const startWinnersPage = ():void => {
  renderWinnersPage();
  getWinners();
  // renderWinnersList();
  // + future behavior();
}

export const onWinnersListUpdate = (stateWinnersList: WinnersList):void => {
  renderWinnersList(stateWinnersList);
}