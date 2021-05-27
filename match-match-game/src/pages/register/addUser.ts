import {PersonData} from "../../common/types";
import { addUser } from "../../common/indexedDB";
import {getCurrentPhoto} from "./photo-behavior";

export const saveFormData = ():void => {

  const personData: PersonData = ['firstName', 'lastName', 'email'].reduce(
    (acc, fieldName) => ({
      ...acc,
      [fieldName]: (document.getElementById(fieldName) as HTMLInputElement).value,
    }),
    { userPhoto: getCurrentPhoto() }
  );

  addUser(personData);
}