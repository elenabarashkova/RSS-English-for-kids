import { removeGaragePage } from "./garage/render";
import { startGaragePage } from "./garage";
import { removeWinnersPage } from "./winners/render";
import { startWinnersPage } from "./winners";

export const PAGES = {
  GARAGE: 'garage',
  WINNERS: 'winners',
}

export const DEFAULT_PAGE = PAGES.GARAGE;

export const PAGES_CONFIG = {
  [PAGES.GARAGE]: {
    start: startGaragePage,
    remove: removeGaragePage,
  },
  [PAGES.WINNERS]: {
    start: startWinnersPage,
    remove: removeWinnersPage,
  },
}