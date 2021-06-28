import { CATEGORIES_LIST } from "./constants";
import { wordsListConfigAnimals } from "../category/words-configs/animals";
import { wordsListConfigTransport } from "../category/words-configs/transport";
import { getCategoryImagePath } from "../category/words-configs"

export const categoriesListConfig: CategoriesListConfig = {
  [CATEGORIES_LIST.ANIMALS]: {
    name: 'Animals',
    url: 'animals',
    imageUrl: getCategoryImagePath('animals'),
    wordsConfig: wordsListConfigAnimals,
  },
  [CATEGORIES_LIST.TRANSPORT]: {
    name: 'Transport',
    url: 'transport',
    imageUrl: getCategoryImagePath('transport'),
    wordsConfig: wordsListConfigTransport,
  },
  [CATEGORIES_LIST.ECOLOGY]: {
    name: 'Ecology',
    url: 'ecology',
    imageUrl: getCategoryImagePath('animals'),
    wordsConfig: wordsListConfigAnimals,
  },
  [CATEGORIES_LIST.CAMPING]: {
    name: 'Camping',
    url: 'camping',
    imageUrl: getCategoryImagePath('animals'),
    wordsConfig: wordsListConfigAnimals,
  },
  [CATEGORIES_LIST.FRUITS]: {
    name: 'Fruits',
    url: 'fruits',
    imageUrl: getCategoryImagePath('animals'),
    wordsConfig: wordsListConfigAnimals,
  },
  [CATEGORIES_LIST.FOOD]: {
    name: 'Food',
    url: 'food',
    imageUrl: getCategoryImagePath('animals'),
    wordsConfig: wordsListConfigAnimals,
  },
  [CATEGORIES_LIST.HOUSE]: {
    name: 'House',
    url: 'house',
    imageUrl: getCategoryImagePath('animals'),
    wordsConfig: wordsListConfigAnimals,
  },
  [CATEGORIES_LIST.FARM]: {
    name: 'Farm',
    url: 'farm',
    imageUrl: getCategoryImagePath('animals'),
    wordsConfig: wordsListConfigAnimals,
  },
}