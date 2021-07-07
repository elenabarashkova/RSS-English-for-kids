import { StatisticConfig, StatisticWord } from "./types";
import { categoriesListConfig } from "../main-page/categories-config";

let db: IDBDatabase;

let fillDefaultNeeded = false;

const fillDefaultConfig = () => {
  const transaction = db.transaction(['statistics'], 'readwrite');
  const store = transaction.objectStore('statistics');

  Object.keys(categoriesListConfig)
    .forEach((category: string) => categoriesListConfig[category].wordsConfig
      .forEach(({word, name, translation}: Word) => {
        const wordObj: StatisticWord = {
          category,
          id: word,
          name,
          translation,
          trainedNum: 0,
          guestedNum: 0,
          mistakesNum: 0,
          successRate: 0,
        }
        store.add(wordObj);
      })
    );
}

export const initializeDB = (callback: CallableFunction): void => {
  const openRequest = indexedDB.open('elenabarashkova', 1);

  openRequest.onupgradeneeded = () => {
    const thisDB = openRequest.result;

    if (!thisDB.objectStoreNames.contains('statistics')) {
      thisDB.createObjectStore('statistics', {autoIncrement: true});

      fillDefaultNeeded = true;
    }
  }

  openRequest.onsuccess = () => {
    db = openRequest.result;

    if (fillDefaultNeeded) {
      fillDefaultConfig();
    }

    callback();
  }
}

export const getStatistics = async (): Promise<StatisticConfig> => {
  const transaction = db.transaction(['statistics'],'readonly');
  const objectStore = transaction.objectStore('statistics');

  return new Promise((resolve, reject) => {
    const request = objectStore.getAll();

    request.onsuccess = () => {
      resolve(request.result);
    }
    request.onerror = reject;
  });
}
//
// export const addScores = (score: number, callback: CallableFunction, triesCount = 0): void => {
//   const transaction = db.transaction(['scores'], 'readwrite');
//   const store = transaction.objectStore('scores');
//   const {email, firstName, lastName, userPhoto} = currentUser;
//
//   const request = store.add({
//     email,
//     firstName,
//     lastName,
//     userPhoto,
//     score,
//   });
//
//   request.onerror = () => {
//     if (triesCount < 5) {
//       addScores(score, callback, triesCount + 1);
//     }
//   }
//   request.onsuccess = () => {
//     callback();
//   }
// }