export interface PersonData {
  firstName?: string,
  lastName?: string,
  email?: string,
  userPhoto?: string,
}

export interface Content {
  title: string,
  id: string,
  className: string,
  content: string,
}

export interface Scores {
  email: string,
  firstName: string,
  lastName: string,
  userPhoto: string,
  score: number,
}