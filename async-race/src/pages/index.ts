import { PAGES_CONFIG } from "./constants";

export const startPage = (prevPageId:string, nextPageId:string, store: Store) => {
  PAGES_CONFIG[prevPageId].remove();
  PAGES_CONFIG[nextPageId].render();
  PAGES_CONFIG[nextPageId].start(store);
}