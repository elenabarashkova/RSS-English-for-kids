export interface ServerCategory {
  name: string,
  id: string,
  isNewCategory?: boolean
}

export type ServerCategoryList = Array<ServerCategory>