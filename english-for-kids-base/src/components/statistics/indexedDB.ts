// import store from "../../redux/store";
// import { StatisticConfig, StatisticWord } from "./types";
// import { STAT_PROPS } from "./constants";
//
// let db: IDBDatabase;
//
// let fillDefaultNeeded = false;
//
// const fillDefaultConfig = () => {
//   const transaction = db.transaction(['statistics'], 'readwrite');
//   const bdStore = transaction.objectStore('statistics');
//
//   Object.keys(categoriesList)
//     .forEach((category: string) => categoriesListConfig[category].wordsConfig
//       .forEach(({word, name, translation}: Word) => {
//         const wordObj: StatisticWord = {
//           category,
//           id: word,
//           name,
//           translation,
//           trainedNum: 0,
//           guestedNum: 0,
//           mistakesNum: 0,
//           successRate: 0,
//         }
//         bdStore.add(wordObj);
//       })
//     );
// }
//
// export const initializeDB = (callback: CallableFunction): void => {
//   const openRequest = indexedDB.open('elenabarashkova', 1);
//
//   openRequest.onupgradeneeded = () => {
//     const thisDB = openRequest.result;
//
//     if (!thisDB.objectStoreNames.contains('statistics')) {
//       thisDB.createObjectStore('statistics', {keyPath: "id"});
//
//       fillDefaultNeeded = true;
//     }
//   }
//
//   openRequest.onsuccess = () => {
//     db = openRequest.result;
//
//     if (fillDefaultNeeded) {
//       fillDefaultConfig();
//     }
//
//     callback();
//   }
// }
//
// export const getStatistics = async (): Promise<StatisticConfig> => {
//   const transaction = db.transaction(['statistics'],'readonly');
//   const objectStore = transaction.objectStore('statistics');
//
//   return new Promise((resolve, reject) => {
//     const request = objectStore.getAll();
//
//     request.onsuccess = () => {
//       resolve(request.result);
//     }
//     request.onerror = reject;
//   });
// }
//
// export const updateWord = (id: string, wordProperty: string): void => {
//   const transaction = db.transaction(['statistics'], 'readwrite');
//   const store = transaction.objectStore('statistics');
//   const request = store.get(id);
//
//   request.onsuccess = () => {
//     const word = request.result;
//
//     const guessed = wordProperty === STAT_PROPS.GUESTED_NUM ? word.guestedNum + 1 : word.guestedNum;
//     const mistakened = wordProperty === STAT_PROPS.MISTAKES_NUM ? word.mistakesNum + 1 : word.mistakesNum;
//     const totalPlayed = guessed + mistakened;
//     let successCount = Math.round(guessed * 100 / totalPlayed);
//
//     if(totalPlayed === 0 || successCount <= 0) {
//       successCount = 0;
//     }
//
//     const updatedWord = {...word, [wordProperty]: word[wordProperty] + 1, successRate: successCount};
//
//     store.put(updatedWord);
//   }
// }