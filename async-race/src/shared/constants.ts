import { removeWinnersPage, renderWinnersPage } from "../render/winners-page";
import { removeGaragePage, renderGaragePage } from "../render/garage-page";
import { startGaragePage } from "../render/start-garage-page";
import { startWinnersPage } from "../render/start-winners-page";

export const PAGES = {
  GARAGE: 'garage',
  WINNERS: 'winners',
}

export const DEFAULT_PAGE = PAGES.GARAGE;

export const PAGES_CONFIG = {
  [PAGES.GARAGE]: {
    render: renderGaragePage,
    remove: removeGaragePage,
    start: startGaragePage,
  },
  [PAGES.WINNERS]: {
    render: renderWinnersPage,
    remove: removeWinnersPage,
    start: startWinnersPage,
  },
}