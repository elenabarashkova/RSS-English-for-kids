import { removeWinnersPage, renderWinnersPage } from "../render/winners-page";
import { removeGaragePage, renderGaragePage } from "../render/garage-page";

export const PAGES = {
  GARAGE: 'garage',
  WINNERS: 'winners',
}

export const DEFAULT_PAGE = PAGES.GARAGE;

export const PAGES_CONFIG = {
  [PAGES.GARAGE]: {
    render: renderGaragePage,
    remove: removeGaragePage,
  },
  [PAGES.WINNERS]: {
    render: renderWinnersPage,
    remove: removeWinnersPage,
  },
}