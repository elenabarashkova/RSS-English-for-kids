import store from "../../redux/store";
import { StatisticConfig, StatisticWord } from "./types";
import { STAT_PROPS } from "./constants";
import { getAllWords } from "../../server/words";
import { ServerWordList } from "../admin-panel/types";

let db: IDBDatabase;

let fillDefaultNeeded = false;

const fillDefaultConfig = async () => {
  await getAllWords();

  const transaction = db.transaction(['statistics'], 'readwrite');
  const bdStore = transaction.objectStore('statistics');

  const {allWordsList} = store.getState();

  (allWordsList as ServerWordList).forEach(({category_id, id, name, translation}) => {
    const wordObj: StatisticWord = {
      category_id,
      id,
      name,
      translation,
      trainedNum: 0,
      guestedNum: 0,
      mistakesNum: 0,
      successRate: 0,
    }
    bdStore.add(wordObj);
  });
}

export const initializeDB = (callback: CallableFunction): void => {
  const openRequest = indexedDB.open('elenabarashkova', 1);

  openRequest.onupgradeneeded = () => {
    const thisDB = openRequest.result;

    if (!thisDB.objectStoreNames.contains('statistics')) {
      thisDB.createObjectStore('statistics', {keyPath: "id"});

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

export const updateWord = (id: string, wordProperty: string): void => {
  const transaction = db.transaction(['statistics'], 'readwrite');
  const bdStore = transaction.objectStore('statistics');
  const request = bdStore.get(id);

  request.onsuccess = () => {
    const word = request.result;

    if(!word) {
      return;
    }

    const guessed = wordProperty === STAT_PROPS.GUESTED_NUM ? word.guestedNum + 1 : word.guestedNum;
    const mistakened = wordProperty === STAT_PROPS.MISTAKES_NUM ? word.mistakesNum + 1 : word.mistakesNum;
    const totalPlayed = guessed + mistakened;
    let successCount = Math.round(guessed * 100 / totalPlayed);

    if(totalPlayed === 0 || successCount <= 0) {
      successCount = 0;
    }

    const updatedWord = {...word, [wordProperty]: word[wordProperty] + 1, successRate: successCount};

    bdStore.put(updatedWord);
  }
}