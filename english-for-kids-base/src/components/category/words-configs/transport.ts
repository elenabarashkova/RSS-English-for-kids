import { getImagePath, getSoundPath } from "./index";

export const wordsListConfigTransport: WordsListConfig = [
  {
    word: 'car',
    name: 'Car',
    translation: 'Машина',
    imageUrl: getImagePath('transport','car'),
    sound: getSoundPath('transport','car')
  },
  {
    word: 'bus',
    name: 'Bus',
    translation: 'Автобус',
    imageUrl: getImagePath('transport','bus'),
    sound: getSoundPath('transport','bus')
  },
  {
    word: 'bicycle',
    name: 'Bicycle',
    translation: 'Велосипед',
    imageUrl: getImagePath('transport','bicycle'),
    sound: getSoundPath('transport','bicycle')
  },
  {
    word: 'train',
    name: 'Train',
    translation: 'Поезд',
    imageUrl: getImagePath('transport','train'),
    sound: getSoundPath('transport','train')
  },
  {
    word: 'plane',
    name: 'Plane',
    translation: 'Самолет',
    imageUrl: getImagePath('transport','plane'),
    sound: getSoundPath('transport','plane')
  },
  {
    word: 'helicopter',
    name: 'Helicopter',
    translation: 'Вертолет',
    imageUrl: getImagePath('transport','helicopter'),
    sound: getSoundPath('transport','helicopter')
  },
  {
    word: 'ship',
    name: 'Ship',
    translation: 'Корабль',
    imageUrl: getImagePath('transport','ship'),
    sound: getSoundPath('transport','ship')
  },
  {
    word: 'motorcycle',
    name: 'Motorcycle',
    translation: 'Мотоцикл',
    imageUrl: getImagePath('transport','motorcycle'),
    sound: getSoundPath('transport','motorcycle')
  },
]