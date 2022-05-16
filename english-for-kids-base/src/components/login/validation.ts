import { successLogin } from "./success-login";

const inputValidation = (currentField: HTMLInputElement) => {
  const wrongPattern = currentField.validity.patternMismatch;

  if (wrongPattern || !currentField.value) {
    currentField.classList.remove('valid');
    currentField.classList.add('invalid');

    return false;
  }

  currentField.classList.remove('invalid');
  currentField.classList.add('valid');

  return true;
}

const handleInputChange = (event: Event) => {
  inputValidation(event.target as HTMLInputElement);
}

const handleSubmit = (event: Event) => {
  event.preventDefault();

  const registerFields = document.getElementsByClassName('register-input');

  const loginData: Record<string, string> = {
    username: '',
    password: '',
  }

  const isValid = [...registerFields]
    .map((item, index) => {
      loginData[Object.keys(loginData)[index]] = (item as HTMLInputElement).value;
      return inputValidation(item as HTMLInputElement);
    })
    .every((isItemValid) => isItemValid);

  if (isValid) {
    successLogin(loginData);
  }
}

export const startValidation = (): void => {
  const registerFields = document.getElementsByClassName('register-input');
  const submitLogin = document.getElementById('submitLogin');

  [...registerFields].forEach(item => item.addEventListener('change', handleInputChange));

  submitLogin?.addEventListener('click', handleSubmit);
}