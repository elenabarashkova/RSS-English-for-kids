import { saveFormData } from "./addUser";
import {initializeClosing, closePopupHandler} from "../../popup/popup";
import { switchToRegisteredMode } from "../../header/render-header/switch-to-registered-mode";

const valid = (field: HTMLInputElement) => {
  field.classList.remove('invalid');
  field.classList.add('valid');

  const errorItem = field.parentElement?.querySelector('.error-text') as HTMLElement;
  errorItem.innerText = '';
}

const invalid = (field: HTMLInputElement, errorText: string) => {
  field.classList.remove('valid');
  field.classList.add('invalid');

  const errorTextElement = field.parentElement?.querySelector('.error-text');
  (errorTextElement as HTMLElement).innerText = errorText;
}

const inputValidation = (currentField: HTMLInputElement) => {
  const wrongPattern = currentField.validity.patternMismatch;
  const wrongType = currentField.validity.typeMismatch;

  if(wrongPattern || wrongType) {
    invalid(currentField, 'Invalid value. Please correct your data.');
    return false;
  }
  if(!currentField.value) {
    invalid(currentField, 'Empty value. Please fill in the field.');
    return false;
  }
  valid(currentField);

  return true;
}

const handleInputChange = (event: Event) => {
  inputValidation(event.target as HTMLInputElement);
}

const handleSubmit = (event: Event) => {
  event.preventDefault();

  const registerFields = document.getElementsByClassName('register-input');

  const isValid = [...registerFields].map(item =>
    inputValidation(item as HTMLInputElement)
  ).every((isItemValid) => isItemValid);

  if(isValid) {
    saveFormData();
    initializeClosing();
    document.removeEventListener('click', closePopupHandler);
    switchToRegisteredMode();
  }
}

export const startValidation = ():void => {
  const registerFields = document.getElementsByClassName('register-input');
  [...registerFields].forEach(item => item.addEventListener('change', handleInputChange));

  const registerSubmit = document.getElementById('registerSubmit');
  registerSubmit?.addEventListener('click', handleSubmit);
}