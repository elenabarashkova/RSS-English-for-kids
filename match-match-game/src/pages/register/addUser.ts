import {PersonData} from "../../common/types";
import { addUser } from "../../common/indexedDB";
import {getCurrentPhoto} from "./photo-behavior";

export const saveFormData = ():void => {
  const formItemsElements = {
    firstNameInput: document.getElementById('firstName'),
    lastNameInput: document.getElementById('lastName'),
    emailInput: document.getElementById('email'),
  };
  const personData: PersonData = {
    firstName: (formItemsElements.firstNameInput as HTMLInputElement)?.value,
    lastName: (formItemsElements.lastNameInput as HTMLInputElement)?.value,
    email: (formItemsElements.emailInput as HTMLInputElement)?.value,
    userPhoto: getCurrentPhoto(),
  };
  addUser(personData);
}