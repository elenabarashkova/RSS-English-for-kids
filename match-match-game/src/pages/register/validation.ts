import { saveFormData } from "./addUser";

let registerFields: HTMLCollection;

const valid = (field: HTMLInputElement) => {
  field.classList.remove('invalid');
  field.classList.add('valid');
  const errorItem = field.parentElement?.querySelector('.error-text') as HTMLElement;
  if(errorItem) {
    errorItem.innerText = '';
  }
}

const invalid = (field: HTMLInputElement) => {
  field.classList.remove('valid');
  field.classList.add('invalid');
  if(field?.parentElement?.querySelector('.error-text')) {
    return field.nextSibling as HTMLElement;
  }
  const errorItem = document.createElement('span');
  errorItem.classList.add('error-text');
  field.insertAdjacentElement('afterend', errorItem);
  return errorItem;
}

const inputValidation = (currentField: HTMLInputElement) => {
  const wrongPattern = currentField.validity.patternMismatch;
  const wrongType = currentField.validity.typeMismatch;
  if(wrongPattern || wrongType) {
    invalid(currentField).innerText = 'Invalid value. Please correct your data.';
    return false;
  }
  if(!currentField.value) {
    invalid(currentField).innerText = 'Empty value. Please fill in the field.';
    return false;
  }
  valid(currentField);
  return true;
}

const onInputChange = (event: Event) => {
  inputValidation(event.target as HTMLInputElement);
}

const onSubmit = (event: Event) => {
  event.preventDefault();
  const isValid = [...registerFields].map(item =>
    inputValidation(item as HTMLInputElement)
  ).every((isItemValid) => isItemValid);
  if(isValid) {
    saveFormData();
  }
}

export const startValidation = () => {
  registerFields = document.getElementsByClassName('register-input');
  [...registerFields].forEach(item => item.addEventListener('change', onInputChange));
  const registerSubmit = document.getElementById('registerSubmit');
  registerSubmit?.addEventListener('click', onSubmit);
}