import { openPopup } from "../../popup/popup";

export const startRegisterFormBehavior = () => {
  const registerBtn = document.getElementById('registerBtn');
  registerBtn?.addEventListener('click', openPopup);

  const registerForm = document.getElementById('registerForm');

// On cancel click
  document.getElementById('cancel')?.addEventListener('cancel', () => {
    (registerForm as HTMLFormElement)?.reset();
  });
}

export const saveFormData = () => {
  const registerFields = document.getElementsByClassName('register-input');
  const personData = {};
  // filling person data
  // [...registerFields].map(item => personData.)

}
