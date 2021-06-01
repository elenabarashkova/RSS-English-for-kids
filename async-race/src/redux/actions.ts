import { SET_ACTIVE_PAGE } from "./types";

export const setActivePage = (page: string) => ({
  type: SET_ACTIVE_PAGE,
  payload: page,
})
