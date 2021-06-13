interface Winner {
  id: number,
  wins: number,
  time: number,
}

interface WinnerItem {
  id: number,
  name: string,
  color: string,
  wins: number,
  time: number,
}

interface WinnersList extends Array<WinnerItem> {}