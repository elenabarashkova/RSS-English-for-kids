import { getImagePath, getSoundPath } from "./index";

export const wordsListConfigFarm: WordsListConfig = [
  {
    word: 'cow',
    name: 'Cow',
    translation: 'Корова',
    imageUrl: getImagePath('farm','cow'),
    sound: getSoundPath('farm','cow')
  },
  {
    word: 'sheep',
    name: 'Sheep',
    translation: 'Овца',
    imageUrl: getImagePath('farm','sheep'),
    sound: getSoundPath('farm','sheep')
  },
  {
    word: 'horse',
    name: 'Horse',
    translation: 'Лошадь',
    imageUrl: getImagePath('farm','horse'),
    sound: getSoundPath('farm','horse')
  },
  {
    word: 'chicken',
    name: 'Chicken',
    translation: 'Курица',
    imageUrl: getImagePath('farm','chicken'),
    sound: getSoundPath('farm','chicken')
  },
  {
    word: 'bee',
    name: 'Bee',
    translation: 'Пчела',
    imageUrl: getImagePath('farm','bee'),
    sound: getSoundPath('farm','bee')
  },
  {
    word: 'pig',
    name: 'Pig',
    translation: 'Свинья',
    imageUrl: getImagePath('farm','pig'),
    sound: getSoundPath('farm','pig')
  },
  {
    word: 'rabbit',
    name: 'Rabbit',
    translation: 'Кролик',
    imageUrl: getImagePath('farm','rabbit'),
    sound: getSoundPath('farm','rabbit')
  },
  {
    word: 'windmill',
    name: 'Windmill',
    translation: 'Мельница',
    imageUrl: getImagePath('farm','windmill'),
    sound: getSoundPath('farm','windmill')
  },
]