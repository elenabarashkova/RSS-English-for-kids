export interface ServerCategory {
  name: string,
  id: string,
  isNewCategory?: boolean
}

export type ServerCategoryList = Array<ServerCategory>

export interface ServerWord {
  id: string,
  name: string,
  translation: string,
  imageurl: string,
  soundurl: string,
  category_id: string,
}

export type ServerWordList = Array<ServerWord>