import { getImagePath, getSoundPath } from "./index";

export const wordsListConfigAnimals: WordsListConfig = [
  {
    word: 'dog',
    name: 'Dog',
    translation: 'Собака',
    imageUrl: getImagePath('animals','dog'),
    sound: getSoundPath('animals','dog')
  },
  {
    word: 'cat',
    name: 'Cat',
    translation: 'Кот',
    imageUrl: getImagePath('animals','cat'),
    sound: getSoundPath('animals','cat')
  },
  {
    word: 'elephant',
    name: 'Elephant',
    translation: 'Слон',
    imageUrl: getImagePath('animals','elephant'),
    sound: getSoundPath('animals','elephant')
  },
  {
    word: 'puma',
    name: 'Puma',
    translation: 'Пума',
    imageUrl: getImagePath('animals','puma'),
    sound: getSoundPath('animals','puma')
  },
  {
    word: 'lion',
    name: 'Lion',
    translation: 'Лев',
    imageUrl: getImagePath('animals','lion'),
    sound: getSoundPath('animals','lion')
  },
  {
    word: 'zebra',
    name: 'Zebra',
    translation: 'Зебра',
    imageUrl: getImagePath('animals','zebra'),
    sound: getSoundPath('animals','zebra')
  },
  {
    word: 'turtle',
    name: 'Turtle',
    translation: 'Черепаха',
    imageUrl: getImagePath('animals','turtle'),
    sound: getSoundPath('animals','turtle')
  },
  {
    word: 'panda',
    name: 'Panda',
    translation: 'Панда',
    imageUrl: getImagePath('animals','panda'),
    sound: getSoundPath('animals','panda')
  },
]