import { PersonData } from "./types";

let db: IDBDatabase;

const openRequest = indexedDB.open('elenabarashkova',1);

openRequest.onupgradeneeded = function(event: IDBVersionChangeEvent) {
  const thisDB = openRequest.result;
  console.log(thisDB);
  if(!thisDB.objectStoreNames.contains('users')) {
    console.log("makng a new object store");
    thisDB.createObjectStore('users',{keyPath: 'email'});
  }
}

openRequest.onsuccess = function(event) {
  console.log("running onsuccess");
  db = openRequest.result;
}

openRequest.onerror = function(event) {
  alert("onerror open database!");
}

export function addUser(personData: PersonData) {
  const transaction = db.transaction(['users'],'readwrite');
  const store = transaction.objectStore('users');
  const request = store.add(personData);
  request.onerror = function(e) {
    console.log("Error adding new person");
  }
  request.onsuccess = function(e) {
    console.log("New person added");
  }
}