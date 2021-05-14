const registerSubmit = document.getElementById('registerSubmit');
const registerFields: HTMLCollection = document.getElementsByClassName('register-input');

function valid(field: HTMLInputElement) {
  field.classList.remove('invalid');
  field.classList.add('valid');
  const errorItem = field.parentElement?.querySelector('.error-text') as HTMLElement;
  if(errorItem) {
    errorItem.innerText = '';
  }
}

function invalid(field: HTMLInputElement) {
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

function inputValidation(currentField: HTMLInputElement) {
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

function onInputChange(event: Event) {
  inputValidation(event.target as HTMLInputElement);
}

function onSubmit(event: Event) {
  event.preventDefault();
  let isValid = true;
  for(let i = 0; i < registerFields.length; i++) {
    isValid = inputValidation(registerFields[i] as HTMLInputElement) && isValid;
  }
  // todo save data if isValid
}

for(let i = 0; i < registerFields.length; i++) {
  (registerFields[i] as HTMLInputElement).addEventListener('change', onInputChange)
}

registerSubmit?.addEventListener('click', onSubmit);