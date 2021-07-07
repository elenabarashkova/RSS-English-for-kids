export interface StatisticWord extends Record<string, string | number> {
  category: string,
  id: string,
  name: string,
  translation: string,
  trainedNum: number,
  guestedNum: number,
  mistakesNum: number,
  successRate: number,
}

export interface StatisticConfig extends Array<StatisticWord> {}