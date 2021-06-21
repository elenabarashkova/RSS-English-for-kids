import { CATEGORIES_LIST } from "./constants";
import { wordsListConfigAnimals } from "../category/words-configs/animals";
import { wordsListConfigTransport } from "../category/words-configs/transport";

export const categoriesListConfig: CategoriesListConfig = {
  [CATEGORIES_LIST.ANIMALS]: {
    name: 'Animals',
    imageUrl: './assets/animals.jpg',
    wordsConfig: wordsListConfigAnimals,
  },
  [CATEGORIES_LIST.TRANSPORT]: {
    name: 'Transport',
    imageUrl: './assets/animals.jpg',
    wordsConfig: wordsListConfigTransport,
  },
  [CATEGORIES_LIST.ECOLOGY]: {
    name: 'Ecology',
    imageUrl: './assets/animals.jpg',
    wordsConfig: wordsListConfigAnimals,
  },
  [CATEGORIES_LIST.CAMPING]: {
    name: 'Camping',
    imageUrl: './assets/animals.jpg',
    wordsConfig: wordsListConfigAnimals,
  },
  [CATEGORIES_LIST.FRUITS]: {
    name: 'Fruits',
    imageUrl: './assets/animals.jpg',
    wordsConfig: wordsListConfigAnimals,
  },
  [CATEGORIES_LIST.FOOD]: {
    name: 'Food',
    imageUrl: './assets/animals.jpg',
    wordsConfig: wordsListConfigAnimals,
  },
  [CATEGORIES_LIST.HOUSE]: {
    name: 'House',
    imageUrl: './assets/animals.jpg',
    wordsConfig: wordsListConfigAnimals,
  },
  [CATEGORIES_LIST.FARM]: {
    name: 'Farm',
    imageUrl: './assets/animals.jpg',
    wordsConfig: wordsListConfigAnimals,
  },
}