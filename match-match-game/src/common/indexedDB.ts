import { PersonData } from "./types";

let db: IDBDatabase;

const openRequest = indexedDB.open('elenabarashkova',1);

openRequest.onupgradeneeded = (event: IDBVersionChangeEvent) => {
  const thisDB = openRequest.result;
  if(!thisDB.objectStoreNames.contains('users')) {
    thisDB.createObjectStore('users',{keyPath: 'email'});
  }
  // todo: create new object store: scores
}

openRequest.onsuccess = (event) => {
  db = openRequest.result;
}

openRequest.onerror = (event) => {
  // console.log("onerror open database!");
  // todo: add behavior
}

export const addUser = (personData: PersonData):void => {
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