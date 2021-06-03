import { startGaragePage } from "./garage";
import { startWinnersPage } from "./winners";

export const PAGES = {
  GARAGE: 'garage',
  WINNERS: 'winners',
}

export const DEFAULT_PAGE = PAGES.GARAGE;

export const PAGES_CONFIG = {
  [PAGES.GARAGE]: {
    name: 'Garage',
    start: startGaragePage,
  },
  [PAGES.WINNERS]: {
    name: 'Winners',
    start: startWinnersPage,
  },
}