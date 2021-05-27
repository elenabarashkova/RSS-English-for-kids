import { PersonData } from "./types";

let db: IDBDatabase;

export const initializeDB = (callback: CallableFunction):void => {
  const openRequest = indexedDB.open('elenabarashkova',1);

  openRequest.onupgradeneeded = () => {
    const thisDB = openRequest.result;
    if(!thisDB.objectStoreNames.contains('users')) {
      thisDB.createObjectStore('users',{keyPath: 'email'});
    }
    if(!thisDB.objectStoreNames.contains('scores')) {
      thisDB.createObjectStore('scores',{autoIncrement:true});
    }
  }

  openRequest.onsuccess = () => {
    db = openRequest.result;
    callback();
  }
}

let currentUser: PersonData;
export const addUser = (personData: PersonData):void => {
  currentUser = personData;
  const transaction = db.transaction(['users'],'readwrite');
  const store = transaction.objectStore('users');
  const request = store.add(personData);

  request.onerror = (e) => {
    // console.log("Error adding new person");
    // todo: prevent ability to push submit || show error alert/popup + close register popup (not adding .registered)
  }
  request.onsuccess = (e) => {
    // console.log("New person added");
    // todo: add initializeClosing here?
  }
}

export const addScores = (score: number, callback: CallableFunction,  triesCount = 0):void => {
  const transaction = db.transaction(['scores'],'readwrite');
  const store = transaction.objectStore('scores');
  const { email, firstName, lastName, userPhoto } = currentUser;
  const request = store.add({
    email,
    firstName,
    lastName,
    userPhoto,
    score,
  });
  request.onerror = () => {
    if (triesCount < 5) {
      addScores(score, callback, triesCount + 1);
    }
  }
  request.onsuccess = (e) => {
    callback();
  }
}

export const getScores = (callback: CallableFunction):void => {
  const transaction = db.transaction(['scores'],'readonly');
  const objectStore = transaction.objectStore('scores');

  const request = objectStore.getAll();


  request.onsuccess = () => {
    const requestResult = request.result;
    requestResult.sort((item1, item2) => item2.score - item1.score);
    const top10Score = requestResult.slice(0, 9);
    callback(top10Score);
  }

  request.onerror = () => {
    // console.log("Error");
  }
}

export const getCurrentUser = ():PersonData => currentUser;
