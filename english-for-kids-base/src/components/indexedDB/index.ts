import store from "../../redux/store";
import { StatisticConfig, StatisticWord } from "../statistics/types";
import { STAT_PROPS } from "../statistics/constants";
import { getAllWords } from "../../server/statistic-data";
import { ServerWordList } from "../admin-panel/types";

let db: IDBDatabase;

let fillDefaultNeeded = false;

const fillDefaultConfig = async () => {
  await getAllWords();

  const transaction = db.transaction(['statistics'], 'readwrite');
  const dbStore = transaction.objectStore('statistics');

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
    dbStore.add(wordObj);
  });
}

let fillDefaultLoginNeeded = false;

const fillDefaultLogin = () => {
  const transaction = db.transaction(['authorization'], 'readwrite');
  const dbStore = transaction.objectStore('authorization');

  dbStore.add({key: 'login', value: 0});
}

export const initializeDB = (callback: CallableFunction): void => {
  const openRequest = indexedDB.open('elenabarashkova', 1);

  openRequest.onupgradeneeded = () => {
    const thisDB = openRequest.result;

    if (!thisDB.objectStoreNames.contains('statistics')) {
      thisDB.createObjectStore('statistics', {keyPath: "id"});

      fillDefaultNeeded = true;
    }

    if (!thisDB.objectStoreNames.contains('authorization')) {
      thisDB.createObjectStore('authorization', {keyPath: "key"});

      fillDefaultLoginNeeded = true;
    }
  }

  openRequest.onsuccess = () => {
    db = openRequest.result;

    if (fillDefaultNeeded) {
      fillDefaultConfig();
    }

    if (fillDefaultLoginNeeded) {
      fillDefaultLogin();
    }

    callback();
  }
}

export const getLogin = async (): Promise<number> => {
  const transaction = db.transaction(['authorization'],'readonly');
  const dbStore = transaction.objectStore('authorization');

  return new Promise((resolve, reject) => {
    const request = dbStore.get('login');

    request.onsuccess = () => {
      resolve(request.result.value);
    }
    request.onerror = reject;
  });
}

export const setLogin = async (value: number): Promise<void> => {
  const transaction = db.transaction(['authorization'],'readwrite');
  const dbStore = transaction.objectStore('authorization');

  return new Promise((resolve, reject) => {
    const request = dbStore.put({
      key: 'login',
      value,
    });

    request.onsuccess = () => {
      resolve();
    }
    request.onerror = reject;
  });
}

export const getStatistics = async (): Promise<StatisticConfig> => {
  const transaction = db.transaction(['statistics'],'readonly');
  const dbStore = transaction.objectStore('statistics');

  return new Promise((resolve, reject) => {
    const request = dbStore.getAll();

    request.onsuccess = () => {
      resolve(request.result);
    }
    request.onerror = reject;
  });
}

export const updateWord = (id: string, wordProperty: string): void => {
  const transaction = db.transaction(['statistics'], 'readwrite');
  const dbStore = transaction.objectStore('statistics');
  const request = dbStore.get(id);

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

    dbStore.put(updatedWord);
  }
}