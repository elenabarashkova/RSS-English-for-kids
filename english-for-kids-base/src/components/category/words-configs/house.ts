import { getImagePath, getSoundPath } from "./index";

export const wordsListConfigHouse: WordsListConfig = [
  {
    word: 'stairs',
    name: 'Stairs',
    translation: 'Лестница',
    imageUrl: getImagePath('house','stairs'),
    sound: getSoundPath('house','stairs')
  },
  {
    word: 'roof',
    name: 'Roof',
    translation: 'Крыша',
    imageUrl: getImagePath('house','roof'),
    sound: getSoundPath('house','roof')
  },
  {
    word: 'wall',
    name: 'Wall',
    translation: 'Стена',
    imageUrl: getImagePath('house','wall'),
    sound: getSoundPath('house','wall')
  },
  {
    word: 'floor',
    name: 'Floor',
    translation: 'Пол',
    imageUrl: getImagePath('house','floor'),
    sound: getSoundPath('house','floor')
  },
  {
    word: 'door',
    name: 'Door',
    translation: 'Дверь',
    imageUrl: getImagePath('house','door'),
    sound: getSoundPath('house','door')
  },
  {
    word: 'window',
    name: 'Window',
    translation: 'Окно',
    imageUrl: getImagePath('house','window'),
    sound: getSoundPath('house','window')
  },
  {
    word: 'kitchen',
    name: 'Kitchen',
    translation: 'Кухня',
    imageUrl: getImagePath('house','kitchen'),
    sound: getSoundPath('house','kitchen')
  },
  {
    word: 'ceiling',
    name: 'Ceiling',
    translation: 'Потолок',
    imageUrl: getImagePath('house','ceiling'),
    sound: getSoundPath('house','ceiling')
  },
]