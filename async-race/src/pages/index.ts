import { PAGES_CONFIG } from "./constants";

export const startPage = (prevPageId:string, nextPageId:string, store: Store):void => {
  PAGES_CONFIG[prevPageId].remove();
  PAGES_CONFIG[nextPageId].start(store);
}