export interface ServerCategory {
  name: string,
  id: string,
  count?: string,
  imageurl?: string,
}

export type ServerCategoryList = Array<ServerCategory>

export interface ServerWord {
  id: string,
  name: string,
  translation: string,
  imageurl: string | Blob | null,
  soundurl: string | Blob | null,
  category_id: string,
}

export type ServerWordList = Array<ServerWord>