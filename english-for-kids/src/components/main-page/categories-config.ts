import { CATEGORIES_LIST } from "./constants";
import { wordsListConfigAnimals } from "../category/words-configs/animals";
import { wordsListConfigTransport } from "../category/words-configs/transport";

export const categoriesListConfig: CategoriesListConfig = {
  [CATEGORIES_LIST.ANIMALS]: {
    name: 'Animals',
    url: 'animals',
    imageUrl: './assets/animals.jpg',
    wordsConfig: wordsListConfigAnimals,
  },
  [CATEGORIES_LIST.TRANSPORT]: {
    name: 'Transport',
    url: 'transport',
    imageUrl: './assets/animals.jpg',
    wordsConfig: wordsListConfigTransport,
  },
  [CATEGORIES_LIST.ECOLOGY]: {
    name: 'Ecology',
    url: 'ecology',
    imageUrl: './assets/animals.jpg',
    wordsConfig: wordsListConfigAnimals,
  },
  [CATEGORIES_LIST.CAMPING]: {
    name: 'Camping',
    url: 'camping',
    imageUrl: './assets/animals.jpg',
    wordsConfig: wordsListConfigAnimals,
  },
  [CATEGORIES_LIST.FRUITS]: {
    name: 'Fruits',
    url: 'fruits',
    imageUrl: './assets/animals.jpg',
    wordsConfig: wordsListConfigAnimals,
  },
  [CATEGORIES_LIST.FOOD]: {
    name: 'Food',
    url: 'food',
    imageUrl: './assets/animals.jpg',
    wordsConfig: wordsListConfigAnimals,
  },
  [CATEGORIES_LIST.HOUSE]: {
    name: 'House',
    url: 'house',
    imageUrl: './assets/animals.jpg',
    wordsConfig: wordsListConfigAnimals,
  },
  [CATEGORIES_LIST.FARM]: {
    name: 'Farm',
    url: 'farm',
    imageUrl: './assets/animals.jpg',
    wordsConfig: wordsListConfigAnimals,
  },
}