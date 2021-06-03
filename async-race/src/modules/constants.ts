import { startGaragePage } from "./garage";
import { startWinnersPage } from "./winners";

export const ROUTES = {
  GARAGE: 'garage',
  WINNERS: 'winners',
}

export const DEFAULT_PAGE = ROUTES.GARAGE;

export const PAGES_CONFIG = {
  [ROUTES.GARAGE]: {
    name: 'Garage',
    start: startGaragePage,
  },
  [ROUTES.WINNERS]: {
    name: 'Winners',
    start: startWinnersPage,
  },
}