import { startGaragePage, stopGaragePage } from "./garage";
import { startWinnersPage, stopWinnersPage } from "./winners";
import { getGaragePageNumber, getWinnersPageNumber } from "../shared";

export const ROUTES = {
  GARAGE: 'garage',
  WINNERS: 'winners',
}

export const DEFAULT_PAGE = ROUTES.GARAGE;

export const PAGES_CONFIG = {
  [ROUTES.GARAGE]: {
    name: 'Garage',
    start: startGaragePage,
    stop: stopGaragePage,
  },
  [ROUTES.WINNERS]: {
    name: 'Winners',
    start: startWinnersPage,
    stop: stopWinnersPage,
  },
}

export const GARAGE_PAGINATION_CONFIG: PaginationConfig = {
  prevPageId: 'prevPage',
  nextPageId: 'nextPage',
  currentPageNum: getGaragePageNumber,
}

export const WINNERS_PAGINATION_CONFIG: PaginationConfig = {
  prevPageId: 'prevPageWinners',
  nextPageId: 'nextPageWinners',
  currentPageNum: getWinnersPageNumber,
}