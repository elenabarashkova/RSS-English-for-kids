import {PersonData} from "../../common/types";
import {addUser} from "../../common/indexedDB";

export const saveFormData = () => {
  const firstNameInput: HTMLInputElement | null = document.querySelector('[name="firstName"]');
  const lastNameInput: HTMLInputElement | null = document.querySelector('[name="lastName"]');
  const emailInput: HTMLInputElement | null = document.querySelector('[name="email"]');
  const userPhotoInput: HTMLInputElement | null = document.querySelector('[name="userPhoto"]');
  const userPhotoFiles = (userPhotoInput as HTMLInputElement).files || [];
  const file = userPhotoFiles[0];
  const personData: PersonData = {
    firstName: (firstNameInput)?.value,
    lastName: (lastNameInput)?.value,
    email: (emailInput)?.value,
    userPhoto: file
  };
  addUser(personData);
}