import { ServerCategoryList } from "../components/admin-panel/types";

export const getCategories = async ():Promise<ServerCategoryList> => (
  (await fetch(`http://localhost:3000/api/categories`)).json()
)
