import { startGaragePage } from "./garage";
import { startWinnersPage } from "./winners";

export const PAGES = {
  GARAGE: 'garage',
  WINNERS: 'winners',
}

export const DEFAULT_PAGE = PAGES.GARAGE;

export const PAGES_CONFIG = {
  [PAGES.GARAGE]: {
    start: startGaragePage,
  },
  [PAGES.WINNERS]: {
    start: startWinnersPage,
  },
}