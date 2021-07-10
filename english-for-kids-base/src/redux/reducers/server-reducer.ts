import { Action, State } from "../types";
import { SET_CATEGORIES_LIST } from "../action-types";
import { ServerCategoryList } from "../../components/admin-panel/types";

export const categoriesListReducer = (
  state = [],
  {type, payload}: Action<ServerCategoryList>
): State['categoriesList'] => {
  if (type === SET_CATEGORIES_LIST) {
    return payload
  }
  return state
}