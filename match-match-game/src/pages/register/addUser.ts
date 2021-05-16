import {PersonData} from "../../common/types";
import { addUser } from "../../common/indexedDB";

export const saveFormData = () => {
  const formItemsElements = {
    firstNameInput: document.getElementById('firstName'),
    lastNameInput: document.getElementById('lastName'),
    emailInput: document.getElementById('email'),
    userPhotoInput: document.getElementById('userPhoto'),
  };
  const userPhotoFiles = (formItemsElements.userPhotoInput as HTMLInputElement).files || [];
  const file = userPhotoFiles[0];
  const personData: PersonData = {
    firstName: (formItemsElements.firstNameInput as HTMLInputElement)?.value,
    lastName: (formItemsElements.lastNameInput as HTMLInputElement)?.value,
    email: (formItemsElements.emailInput as HTMLInputElement)?.value,
    userPhoto: file
  };
  addUser(personData);
}