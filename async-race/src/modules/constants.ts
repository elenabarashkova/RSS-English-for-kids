import { startGaragePage, stopGaragePage } from "./garage";
import { startWinnersPage, stopWinnersPage } from "./winners";

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