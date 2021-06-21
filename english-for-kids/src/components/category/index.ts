import { getCategoryInner } from "./render";
import { wordsListConfigAnimals } from "./constants";

export const startCategoryPage = (): void => {
  const main = document.getElementById('main') as HTMLElement;

  main?.insertAdjacentHTML('beforeend', getCategoryInner(wordsListConfigAnimals));
}